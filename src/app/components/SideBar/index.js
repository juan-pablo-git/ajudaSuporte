'use client'
import { usePathname, useRouter } from "next/navigation"
import { AiFillHome } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import "./style.css"

export default () => {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div className="containerSidebar">
            <div className="containerUlSidebar" >
                <ul className="ulSidebar">
                    <dl onClick={() => { router.push("/home") }}>
                        <AiFillHome /> Home
                    </dl>
                    <dl onClick={() => { router.push("/bot") }}>
                        <FaRobot /> Bot
                    </dl>
                    <dl onClick={() => { router.push("/atendentes") }}>

                       <IoPerson /> atendentes
                    </dl>
                    <dl onClick={() => { router.push("/niveis") }}>
                        niveis
                    </dl>
                </ul>
            </div>
        </div>
    )
}