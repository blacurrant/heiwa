import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux';
import { setPlaylist } from '../redux/slice/Playlist/playlistArray';

export default function Modal({ open, setOpen }) {
  // const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null)

  const [playlistName, setPlaylistName] = useState('');
  let dispatch = useDispatch();

  const handleInput = (e) => {
    setPlaylistName(e.target.value);
  }

  const handleCreate = () => {
    console.log(playlistName);
    setOpen(false);
    dispatch(setPlaylist(playlistName));
  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 text-gray-500 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-gray-900 text-gray-500 px-4 pb-4 pt-5 space-y-5 flex flex-col items-center sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                    <div className="flex flex-col items-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-200">
                        Create a Playlist
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-300">
                          Are you sure you want to Create a New Playlist?
                        </p>
                      </div>
                    </div>
                  </div>

                  <input id='image' type="file" alt='image' />
                  <label htmlFor="image">
                    <faUser />
                  </label>
                  <input className='border border-gray-300 outline-none bg-gray-900 w-full text-gray-200 px-5 py-2 rounded-md' type='text' onChange={handleInput} />
                </div>
                <div className=" px-4 py-3 flex justify-center sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-gray-300 outline-none text-gray-800 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={handleCreate}
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-300 outline-none border-none text-gray-800 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 sm:mt-0 sm:w-auto"
                    onClick={e => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
