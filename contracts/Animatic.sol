pragma solidity ^0.5.16;

contract Animatic {
    string public name = "Animatic";

    mapping(uint256 => Video) public videos;
    uint256 public videoCount = 0;

    struct Video {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    event VideoCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    event VideoTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    // Create an Video
    function uploadVideo(string memory _vidHash, string memory _description)
        public
    {
        require(bytes(_vidHash).length > 0);
        require(bytes(_description).length > 0);
        require(msg.sender != address(0x0));

        videoCount++;
        videos[videoCount] = Video(
            videoCount,
            _vidHash,
            _description,
            0,
            msg.sender
        );
        emit VideoCreated(videoCount, _vidHash, _description, 0, msg.sender);
    }

    function tipVideoOwner(uint256 _id) public payable {
        require(_id > 0 && _id <= videoCount);
        Video memory _video = videos[_id];
        address payable _author = _video.author;
        address(_author).transfer(msg.value);
        _video.tipAmount = _video.tipAmount + msg.value;
        videos[_id] = _video;

        emit VideoTipped(
            _id,
            _video.hash,
            _video.description,
            _video.tipAmount,
            _author
        );
    }
}
