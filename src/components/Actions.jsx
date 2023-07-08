import Button from './Button'

const Actions = ({ primary, secondary }) => {
  return (
    <div className='flex justify-end gap-3 border-t pt-4 w-full'>
      <Button
        variant='secondary'
        {...secondary}
      />
      {primary && (
        <Button
          variant='primary'
          {...primary}
        />
      )}
    </div>
  )
}

export default Actions
