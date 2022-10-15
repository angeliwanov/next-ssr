import Link from "next/link";
import Image from "../components/Image";

const About = () => {
    return (
        <div style={{color: "red"}}>
            <h1>About</h1>
            <Image/>
            <p>I was once a magician</p>
            <Link href="/"><button>Back</button></Link>
        </div>
    )
}

export default About;