const ImageInput = () => {
  return (
    <section className='w-full min-h-[150px] flex gap-4'>
      <div className='w-4/12 bg-slate-100 rounded-lg border border-slate-300 flex items-center justify-center'>
        <h3>Foto</h3>
      </div>

      <div className='w-8/12'>
        <input type='file' />
      </div>
    </section>
  )
}

export default ImageInput
