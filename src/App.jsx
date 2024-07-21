import './App.css'
import pic from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'
function App() {

  return (
    <>
      <div className='bg-new-Yellow h-screen  grid place-items-center z-10 relative'>
          <div className='bg-white font-figtree max-w-sm my-44 p-5 rounded-2xl border-black border-2 relative mx-5' >
              <div className='flex justify-center'>
                <img src={pic} alt="" className='rounded-lg'/>
              </div>
              <div className='my-5 flex flex-col'>
                <span className='bg-new-Yellow w-[30%] text-center rounded font-semibold'>Learning</span>
                <span className='mt-3'> Published 21 Dec 2023</span>
              </div>
              <div>
                <h2 className='md:text-2xl text-xl font-extrabold hover:cursor-pointer hover:text-new-Yellow z-50'>HTML & CSS foundations</h2>
                <p className='my-3 text-sm md:text-base'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
              </div>
              <div className='flex items-center'>
                <img src={avatar} alt="" className='w-8 mr-3'/>
                <span className='font-semibold'>Greg Hooper</span>
              </div>
              <div className='w-full h-full bg-black absolute -bottom-3 left-3 -z-10 rounded-2xl '>

              </div>
          </div>
      </div>
    </>
  )
}

export default App
