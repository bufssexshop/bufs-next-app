'use client'

import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import { PhotoIcon, DocumentArrowUpIcon, TrashIcon } from '@heroicons/react/24/solid'

const ImageInput = ({ handleChange, value }) => {
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const dataURL = reader.result
        setImagePreview(dataURL)
        setFile(file)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleLabelClick = (event) => {
    event.stopPropagation()
  }

  const handleDeleteFile = () => {
    setImagePreview()
    setFile()
  }

  console.log('xxx file: ', file)
  return (
    <section className='w-full min-h-[150px] max-h-[150px] flex gap-4'>
      <div className='w-4/12 bg-slate-100 rounded-lg border border-slate-300 flex items-center justify-center overflow-hidden'>
        {imagePreview
          ? (
            <div className='relative w-full h-full'>
              <Image
                src={imagePreview}
                alt='Vista previa/nueva imagen'
                quality={100}
                fill
                style={{
                  objectFit: 'contain'
                }}
              />
              <div className='w-full flex justify-between absolute bottom-0 right-0 py-1 px-4 bg-slate-500/50'>
                <p className='text-slate-50 font-bold'>Vista previa</p>
                <TrashIcon onClick={handleDeleteFile} class='h-6 w-6 text-slate-50 cursor-pointer' />
              </div>
            </div>
            )
          : (
            <div className='flex flex-col justify-end items-center'>
              <PhotoIcon className='h-14 w-14 text-gray-500' />
            </div>
            )}
      </div>

      <div
        className={`w-8/12 bg-slate-100 rounded-lg border-dashed border-2 border-slate-300 flex flex-col items-center justify-center ${
          isDragActive ? 'border-blue-500' : ''
        }`}
        {...getRootProps()}
      >
        <input id='file-1' className='hidden' {...getInputProps()} />
        <label
          className='flex gap-2 text-slate-50 cursor-pointer bg-slate-500 hover:bg-slate-400 duration-500 p-2 rounded mb-2'
        >
          <DocumentArrowUpIcon className='h-6 w-6 text-slate-50' />
          {imagePreview ? <span>{file.name}</span> : <span>Seleccionar archivo</span>}
          <span onClick={handleLabelClick}>{/* Aquí se detiene la propagación del evento */}</span>
        </label>
        {file && (
          <div className='flex justify-center'>
            <div className='w-4/5 flex flex-col justify-center items-center gap-1'>
              <p className='text-slate-500 font-bold text-sm'>¿Imagen equivocada?</p>
              <p className='text-slate-500 text-sm text-center'>
                Arrastra una nueva o cambiala haciendo click en cualquier parte de esta sección o en el nombre de la img actual.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageInput
