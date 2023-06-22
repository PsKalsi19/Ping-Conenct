import { Tab } from '@headlessui/react'
import { useContext } from 'react'
import { PostContext } from './../../context/PostProvider';
import POSTS_ACTIONS from '../../constants/posts-actions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {
  const { postsDispatch } = useContext(PostContext)
  const handleTabChange = (e) => {
    e === 0 ? postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: 'latest' }) : postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: 'trending' })
  }
  return (
    <div className="w-full px-2 pb-4 bg-orange-100 sm:px-0">
      <Tab.Group defaultIndex={0} onChange={handleTabChange}>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-orange-400/20">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                'ring-orange-200 ring-opacity-60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-orange-50 shadow'
                  : 'text-gray-100 hover:bg-orange-100/80 hover:text-gray-700'
              )
            }
          >
            Latest
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                'ring-orange-200 ring-opacity-60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-orange-50 shadow'
                  : 'text-gray-100 hover:bg-orange-100/80 hover:text-gray-700'
              )
            }
          >
            Trending
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default Tabs