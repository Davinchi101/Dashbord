import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

 function Breadcrumb() {
  return (
    <div className='ml-7 p-1 font-primary'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
         <svg className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M6.09584 13.8548V11.8102C6.09583 11.2921 6.51713 10.8711 7.03898 10.8679H8.95509C9.47927 10.8679 9.9042 11.2898 9.9042 11.8102V13.8488C9.90419 14.2982 10.2694 14.6634 10.722 14.6667H12.0292C12.6398 14.6682 13.2259 14.4285 13.6581 14.0005C14.0904 13.5724 14.3334 12.9912 14.3334 12.385V6.57724C14.3333 6.0876 14.1147 5.62315 13.7364 5.30901L9.29534 1.78286C8.51903 1.16609 7.41027 1.18602 6.65695 1.83027L2.31136 5.30901C1.91518 5.61389 1.67839 6.07972 1.66669 6.57724V12.3791C1.66669 13.6425 2.69827 14.6667 3.9708 14.6667H5.24821C5.46614 14.6682 5.67568 14.5834 5.83034 14.431C5.98499 14.2785 6.07197 14.0711 6.07196 13.8548H6.09584Z" fill="#D23565"/>
         </svg>
        </Link>
        <Link underline="hover" color="inherit" href="/">
           Page
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Page
        </Link>
        <Link underline="hover" color="inherit" href="/">
           Page
        </Link>
        <Link underline="hover" color="inherit" href="/">
           Page 
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;