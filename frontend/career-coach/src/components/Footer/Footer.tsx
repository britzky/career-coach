import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import x from '../../assets/images/x.png'

export const Footer = () => {
  return (
    <footer className="flex items-center bg-footer h-[110px] w-full mt-auto">
        <div className="flex justify-between items-center w-full mx-10 font-medium text-xxs lg:text-sm">
            <div>
                <p>All Rights Reserved © MyPDP 2024</p>
            </div>
            <div className="flex justify-between gap-3 lg:gap-5">
                <img src={facebook} alt="facebook" className="h-6 w-6 lg:h-auto lg:h-auto lg:w-auto" />
                <img src={instagram} alt="instagram" className="h-6 w-6 lg:h-auto lg:w-auto" />
                <img src={x} alt="x" className="h-6 w-6 lg:h-auto lg:w-auto" />
            </div>
        </div>
    </footer>
  )
}
