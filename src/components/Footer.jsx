const Footer = () => {
    const myStyle = {
        backgroundColor: '#444444'
    }
    return (
        <>
            <footer className="footer p-10 text-base-content" style={myStyle}>
                <nav>
                    <header className="footer-title text-yellow-300 text-2xl">Services</header>
                    <a className="link link-hover text-yellow-300">Branding</a>
                    <a className="link link-hover text-yellow-300">Design</a>
                    <a className="link link-hover text-yellow-300">Marketing</a>
                    <a className="link link-hover text-yellow-300">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title text-yellow-300 text-2xl">Company</header>
                    <a className="link link-hover text-yellow-300">About us</a>
                    <a className="link link-hover text-yellow-300">Contact</a>
                    <a className="link link-hover text-yellow-300">Jobs</a>
                    <a className="link link-hover text-yellow-300">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-yellow-300 text-2xl">Legal</header>
                    <a className="link link-hover text-yellow-300">Terms of use</a>
                    <a className="link link-hover text-yellow-300">Privacy policy</a>
                    <a className="link link-hover text-yellow-300">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title text-yellow-300 text-2xl">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-yellow-300">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}
export default Footer