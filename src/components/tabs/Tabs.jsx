import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = ({handleTabChange,tabTypes}) => {
  return (
    <div className="w-full px-2 pb-4 bg-orange-100 sm:px-0">
      <Tab.Group defaultIndex={0} onChange={handleTabChange}>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-orange-400/20">
         {tabTypes.map((tab,index)=>  <Tab key={index}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-orange-200 uppercase ring-opacity-60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-orange-50 text-gray-600 shadow'
                  : ' hover:bg-orange-100/80  text-gray-500 hover:text-gray-700'
              )
            }
          >
            {tab}
          </Tab>)}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default Tabs