import { Button } from '@nextui-org/react'

const Actions = ({ primary, secondary }) => {
  return (
    <div className='flex justify-end gap-3 border-t pt-4 w-full'>
      <Button
        radius='full'
        className='bg-transparent text-slate-500 hover:bg-slate-200'
        {...secondary}
      >
        {secondary.label}
      </Button>

      {primary && (
        <Button
          radius='full'
          color={primary.color}
          {...primary}
        >
          {primary.label}
        </Button>
      )}
    </div>
  )
}

export default Actions
