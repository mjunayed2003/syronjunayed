
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Send } from 'lucide-react'

const images: { src: string; herf: string }[] = [
    { src: "/img9.webp", herf: '#' },
    { src: "/img8.webp", herf: '#' },
    { src: "/img7.webp", herf: '#' },
    { src: "/img6.webp", herf: '#' },
    { src: "/img5.webp", herf: '#' },
    { src: "/img4.webp", herf: '#' },
    { src: "/img3.webp", herf: '#' },
    { src: "/img2.webp", herf: '#' },
    { src: "/img-1.webp", herf: '#' },
]
const Footer = () => {
    return (
        <div className='border-t '>
            <footer className="bg-white text-gray-800 pt-10 ">
                {/* image scroll */}
                <div className="overflow-hidden relative w-full bg-gray-50 py-4 pb-10">
                    <div className='mb-25 mt-10 text-center'>
                        <h4 className='text-2xl font-bold'>@RivaxStudio</h4>
                        <p className='font-normal'>Join me on Instagram for a peek into my daily news!</p>
                        <Button variant="destructive" className="mt-3">Follow @RivaxStudio</Button>
                    </div>
                    <div className="border-t bg-gray-50 py-10 overflow-hidden">
                        <div className="relative">
                            {/* scroll wrapper */}
                            <div className="flex w-max animate-scroll">
                                {[...images, ...images].map((img, key) => (
                                    <div
                                        key={key}
                                        className={`min-w-auto mx-3 transition-transform duration-300 ${key % 2 === 0 ? "translate-y-3" : "-translate-y-3"}`}
                                    >
                                        <a href={img.herf}>
                                            <img
                                                src={img.src}
                                                alt="scroll-img"
                                                className="rounded-lg shadow-md w-auto h-[300px] object-cover"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Footer Content === */}
                <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
                    {/* Logo + About */}
                    <div>
                        <h2 className="my-2">
                            <img src="/logo.svg" alt="logo" className='h-20 w-30' />
                        </h2>
                        <p className="mt-3 text-sm text-gray-500">
                            This is a great space to write text <b>about your company</b> and
                            your services. You can use this space to go into a little more{" "}
                            <a href="#" className="text-black font-bold  underline ">
                                details
                            </a>{" "}
                            about your company.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-500">Links</h3>
                        <ul className="space-y-2 text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-pink-600">About Us</a></li>
                            <li><a href="#" className="hover:text-pink-600">Our Story</a></li>
                            <li><a href="#" className="hover:text-pink-600">Projects</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className='text-gray-500 font-medium'>
                        <h3 className="text-lg font-semibold mb-3">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { text: "#Entertainment", color: "text-red-500" },
                                { text: "#Gadget", color: "text-blue-500" },
                                { text: "#Ideas", color: "text-green-500" },
                                { text: "#Inspiration", color: "text-purple-500" },
                                { text: "#Lifestyle", color: "text-pink-500" },
                                { text: "#Music", color: "text-yellow-500" },
                                { text: "#Travel", color: "text-teal-500" },
                                { text: "#Trending", color: "text-orange-500" },
                            ].map((tag, i) => (
                                <span
                                    key={i}
                                    className={`text-sm ${tag.color} cursor-pointer decoration-4 hover:underline hover:decoration-red-500 `}
                                >
                                    {tag.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-500">Newsletter</h3>
                        <p className="text-sm mb-3">Subscribe to get latest articles</p>
                        <div className="flex gap-2">
                            <Input placeholder="Email Address*" type="email" />
                            <Button className="bg-pink-600 hover:bg-pink-700"> <Send /> Join</Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="container mx-auto px-6 py-12">
                    {/* Decorative multi-color line with top-left icon */}
                    <div className="relative mb-8">
                        <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-purple-400 to-teal-400" />
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Side */}
                        <div className="text-gray-600 text-sm">
                            <p>
                                This website may collect data about you, use cookies, embed additional third-party tracking, and
                                monitor your interaction with that embedded content.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col items-start md:items-end">
                            <h4 className="font-semibold text-base bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                                Follow Us On Socials
                            </h4>
                            <div className="flex items-center gap-4 mt-3 text-gray-500">
                                {/* Custom M Icon */}
                                <a href="#" className="hover:text-gray-900 transition-colors">
                                    <div className="w-6 h-6 bg-gray-600 text-white flex items-center justify-center font-bold text-sm">M</div>
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="hover:text-gray-900 transition-colors">
                                    <Send className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar: Links and Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center gap-4 mb-4 sm:mb-0">
                            <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                            <span>|</span>
                            <Link to="/terms-and-conditions" className="hover:text-gray-900">Terms and Conditions</Link>
                        </div>
                        <p>Copyright & Design By @Rivaxstudio - 2025</p>
                    </div>
                </div>

            </footer >
        </div >
    )
}

export default Footer