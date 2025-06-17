
import './loading.scss';

const LoadingSpinner = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <p className="text">Loading movies...</p>
    </div>
  )
}

export default LoadingSpinner;
