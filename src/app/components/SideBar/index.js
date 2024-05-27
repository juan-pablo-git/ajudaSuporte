'use client'
import { usePathname, useRouter } from "next/navigation"
import { AiFillHome } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CgPoll } from "react-icons/cg";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";


import "./style.css"

export default () => {
    const pathname = usePathname()

    const router = useRouter()

    const [condensedSideBar, setCondensedSideBar] = useState(true)

    return (<>
        <div className="containerSidebar" style={{ display: condensedSideBar == false ? "" : "none" }}>
            <div style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 10, display: "flex", alignItems: "center", justifyContent: "right" }}>

                <button style={{border:"none",borderRadius:"100%",padding:5}} onClick={() => {
                    setCondensedSideBar(!condensedSideBar)
                }}> <GoChevronLeft /> </button>

            </div>
            <div style={{ height: "92%", display: "flex", alignItems: "center"}} >
                <ul className="ulSidebar">
                    <dl onClick={() => { router.push("/home") }}>
                        <AiFillHome /> Home
                    </dl>
                    <dl onClick={() => { router.push("/bot") }}>
                        <FaRobot /> Bot
                    </dl>
                    <dl onClick={() => { router.push("/atendentes") }}>

                        <IoPerson /> Atendentes
                    </dl>
                    <dl onClick={() => { router.push("/niveis") }}>
                        <CgPoll /> Níveis
                    </dl>
                </ul>
            </div>
        </div>
        <div className="containerSidebar" style={{ display: condensedSideBar == true ? "" : "none" }} >

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 10, paddingBottom: 10 }}>
                <button style={{border:"none",borderRadius:"100%",padding:5}} onClick={() => {
                    setCondensedSideBar(!condensedSideBar)
                }} > < GoChevronRight /></button>
            </div>

            <div style={{ height: "92%", display: "flex", alignItems: "center" }}>
                <ul style={{fontSize:"20px"}} className="ulSidebar">
                    <dl onClick={() => { router.push("/home") }}>
                        <AiFillHome />
                    </dl>
                    <dl onClick={() => { router.push("/bot") }}>
                        <FaRobot />
                    </dl>
                    <dl onClick={() => { router.push("/atendentes") }}>

                        <IoPerson />
                    </dl>
                    <dl onClick={() => { router.push("/niveis") }}>
                        <CgPoll />
                    </dl>
                </ul>
            </div>
        </div>
    </>
    )
}