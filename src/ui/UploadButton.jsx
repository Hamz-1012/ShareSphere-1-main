import { BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function UploadButton() {
  return (
    <Link className="flex justify-around " to="/resources/upload">
      <BsUpload size={'2em'} className="cursor-pointer" />
      <p className="text-center">Upload</p>
    </Link>
  );
}

export default UploadButton;
