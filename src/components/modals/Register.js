import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function RegisterModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeRegModal() {
    setIsOpen(false)
  }

  function openRegModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openRegModal}
        className="text-[#B7B7B7] text-xs font-[Metropolis] px-6 py-1"
        >
      Register
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeRegModal}
        >
          <div className="min-h-screen px-4 text-center bg-[#D2D2D2]/30">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1F1F1F] shadow-xl rounded-2xl">
                  <button //Close Button
                    type="button"
                    className="absolute top-2 right-2 px-4 py-2 text-sm font-medium text-[#B1B1B1]"
                    onClick={closeRegModal}
                  > X </button>
                  {/* Tittle of Modal */}
                  <Dialog.Title as="h3"className="text-3xl font-[Metropolis] font-bold text-white p-6 text-center">
                  Register</Dialog.Title>
                {/* Form */}
                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action=" ">
                  <div>
                    <input type="email" placeholder="Email" class="bg-[#D2D2D2]/25 border border-[#D2D2D2] text-[#B1B1B1] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                  </div>
                  <div>
                    <input type="text" placeholder="Name" class="bg-[#D2D2D2]/25 border border-[#D2D2D2] text-[#B1B1B1] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                  </div>
                  <div>
                    <input type="text" placeholder="Username" class="bg-[#D2D2D2]/25 border border-[#D2D2D2] text-[#B1B1B1] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                  </div>
                  <div>
                    <input type="password"  placeholder="Password" class="bg-[#D2D2D2]/25 border border-[#D2D2D2] text-[#B1B1B1] text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                  </div>
                  {/* Register Button */}
                  <button type="submit" class="w-full p-2.5 mb-0 text-white font-[Metropolis] font-extrabold bg-gradient-to-r from-[#4DD4F7] via-[#9090FB] via-[#FF6B81] to-[#FBDF63] rounded text-center">Register</button>
                  <div class="text-sm font-extralight font-[Metropolis] text-[#B1B1B1] text-center">
                    Already have an account ? Click <a href=" " class="text-[#B1B1B1] font-bold hover:underline">Here</a>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default RegisterModal;
