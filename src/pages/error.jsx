import { useRouteError, useNavigate } from "react-router-dom"

function ErrorPage(props) {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <h1 className={`font-inter text-9xl m-0 font-normal ${props.darkMode ? 'dark' : 'light'}`}>{error.status}</h1>
                <h1 className={`font-inter text-2xl m-0 font-extralight ${props.darkMode ? 'dark' : 'light'}`}>Oops, that wasn't part of the fun</h1>
                <button onClick={() => navigate('/')} className={`px-3 py-1 font-inter mt-5 font-light text-lg outline-none border-none transition duration-300 hover:translate-y-2 ${props.darkMode ? 'hover:bg-white hover:text-black dark' : 'hover:bg-black hover:text-white light'}`}>back to the action</button>
            </div>
    )
}
export default ErrorPage