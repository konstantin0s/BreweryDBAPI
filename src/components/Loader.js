import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons';
import './css/loader.css';

function ShowDetail() {
  return (
    <div className="loader text-center">
     <FontAwesomeIcon className="icon" icon={faSpinner}  size='10x' />
    </div>
  );
}

export default ShowDetail;