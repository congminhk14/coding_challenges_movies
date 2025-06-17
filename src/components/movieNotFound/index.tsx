'use client';
import { ArrowLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import './movieNotFound.scss';
import { useRouter } from 'next/navigation';

const MovieNotFound = () => {
  const router = useRouter();
  return (
    <div className="movieNotFound">
      <ExclamationTriangleIcon className='iconAlert' />
      <div className='title'>Oops! Something went wrong</div>
      <div className='desc'>Failed to fetch movie detail</div>
      <div className='buttonGroup'>
        <button
          className="buttonBack"
          onClick={() => router.push('/')}
        >
          Back to Homepage
        </button>

        <button
          className="buttonRetry"
          onClick={() => router.refresh()}
        >
          Try Again
        </button>
      </div>
    </div>
  )
};

export default MovieNotFound;