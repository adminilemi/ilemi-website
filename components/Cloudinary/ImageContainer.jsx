'use client';
import React from 'react';
import CustomUploadToCloudinary from './CustomUploadToCloudinary';
import Image from 'next/image';

const ImageContainer = ({
  images,
  cat,
  id,
  loading,
  uploadFiles,
  title,
  removeImage,
  error,
}) => {
  const placeholderImageUrl =
    'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg';

  return (
    <article className='imageContainer'>
      {title && <small className=''> {title} </small>}
      <div className={error ? 'errors card p-3 my-3' : 'card p-3 my-3'}>
        {images !== '' ? (
          <figure className='p-3 overflow-hidden'>
            (
            <Image src={images} alt='' objectFit='cover' />)
          </figure>
        ) : (
          <figure>
            <Image src={placeholderImageUrl} alt='' />
          </figure>
        )}
        <small className='text-center'>Upload Image (PNG, JPG, AVIF)</small>
      </div>

      <div className='flex flex-col lg:flex-row justify-center gap-3'>
        <div className='w-full lg:w-5/12'>
          <CustomUploadToCloudinary
            id={id}
            loading={loading[id]}
            uploadChange={(e) => uploadFiles(e, id, cat)}
          />
        </div>
        <div className='w-full lg:w-5/12'>
          <button
            className='outline-btn w-full'
            onClick={() => removeImage(id, cat)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default ImageContainer;
