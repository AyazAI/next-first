import headerStyles from "../styles/Header.module.css";
const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>AyazAI</span>
            </h1>

            <p className={headerStyles.description}>
                Keep upto Date with AyazAI
            </p>
            {/* <style jsx>
                {`
                .title {
                    color: red
                }
                `}
            </style> */}
        </div>
    )
}
export default Header;