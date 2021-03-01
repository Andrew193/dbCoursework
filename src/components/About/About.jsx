import im from "./img/first.jpg"
import React from "react"
import im2 from "./img/second.jpg"
import im3 from "./img/third.webp"
import im4 from "./img/4.jpg"
import Script from "./script"
import s from "./style.module.css"
import { useState } from "react/cjs/react.development"
function About(props) {
    const [flag,setFlag]=useState(false)
    let moreBlock=React.createRef()
    return (<>
    <div className={flag?s.Modal:s.Modal+" "+s.ModalHide} ref={(el)=>moreBlock=el}><button onClick={()=>
    Script.remove(flag,setFlag)}>{props.t("about.close")}</button></div>
        <div className={props.colorMode ? s.Container + " " + props.NightMode : s.Container}>
            <h1>{props.t("about.title")}</h1>
            <div className={s.firstLine}>
                <section>
                    <img src={im} className={props.colorMode ? s.Nimg : s.Limg} alt="Book" onClick={(e)=>{
                      Script.showMore(e,moreBlock,setFlag,props.t,flag)}} title={props.t("about.tip")}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate autem dolores commodi quo dignissimos sunt, corporis, modi eos recusandae sapiente explicabo architecto provident? Quo voluptatem esse neque deleniti dignissimos.
                    Reprehenderit, fugit eaque itaque nulla debitis eum nesciunt ratione soluta error dolore quisquam esse rem vel, molestiae alias magni deleniti maiores velit. Nobis sit omnis inventore, ipsa sunt amet velit?
                    Asperiores magnam, praesentium nostrum non fugit aliquam esse. At suscipit officia autem modi, veniam in nisi dignissimos nobis ipsa qui reiciendis vel distinctio iusto tempore quis delectus possimus eos totam?
                    Saepe non ipsam cupiditate sed sapiente. Amet sint vitae aliquam, nobis aperiam similique atque! Libero temporibus neque rem eos ipsum labore fugit blanditiis a quo? Soluta eos officiis perferendis perspiciatis?</p>
                </section>
                <section>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate autem dolores commodi quo dignissimos sunt, corporis, modi eos recusandae sapiente explicabo architecto provident? Quo voluptatem esse neque deleniti dignissimos.
                    Reprehenderit, fugit eaque itaque nulla debitis eum nesciunt ratione soluta error dolore quisquam esse rem vel, molestiae alias magni deleniti maiores velit. Nobis sit omnis inventore, ipsa sunt amet velit?
                    Asperiores magnam, praesentium nostrum non fugit aliquam esse. At suscipit officia autem modi, veniam in nisi dignissimos nobis ipsa qui reiciendis vel distinctio iusto tempore quis delectus possimus eos totam?
                    Saepe non ipsam cupiditate sed sapiente. Amet sint vitae aliquam, nobis aperiam similique atque! Libero temporibus neque rem eos ipsum labore fugit blanditiis a quo? Soluta eos officiis perferendis perspiciatis?</p>
                    <img src={im2} className={props.colorMode ? s.Nimg : s.Limg} alt="Book" onClick={(e)=>{
                      Script.showMore(e,moreBlock,setFlag,props.t,flag)}} title={props.t("about.tip")} />
                </section>
                <section>
                    <img src={im3} className={props.colorMode ? s.Nimg : s.Limg} alt="Book" onClick={(e)=>{
                      Script.showMore(e,moreBlock,setFlag,props.t,flag)}} title={props.t("about.tip")}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate autem dolores commodi quo dignissimos sunt, corporis, modi eos recusandae sapiente explicabo architecto provident? Quo voluptatem esse neque deleniti dignissimos.
                    Reprehenderit, fugit eaque itaque nulla debitis eum nesciunt ratione soluta error dolore quisquam esse rem vel, molestiae alias magni deleniti maiores velit. Nobis sit omnis inventore, ipsa sunt amet velit?
                    Asperiores magnam, praesentium nostrum non fugit aliquam esse. At suscipit officia autem modi, veniam in nisi dignissimos nobis ipsa qui reiciendis vel distinctio iusto tempore quis delectus possimus eos totam?
                    Saepe non ipsam cupiditate sed sapiente. Amet sint vitae aliquam, nobis aperiam similique atque! Libero temporibus neque rem eos ipsum labore fugit blanditiis a quo? Soluta eos officiis perferendis perspiciatis?</p>
                </section>
                <section>
                    <section>
                        <h2>Lorem ipsum</h2>
                    <ol>
                        <li>Lorem ipsum 1</li>
                        <li>Lorem ipsum 2</li>
                        <li>Lorem ipsum 3</li>
                        <li>Lorem ipsum 4</li>
                    </ol>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sequi cum provident quaerat repellat rerum sed delectus harum cumque dolorum debitis aut quod consectetur, enim quae facilis quia incidunt? Numquam.
                    Enim assumenda cumque voluptate aperiam eveniet earum numquam eligendi, iusto obcaecati, adipisci optio commodi? A doloribus soluta earum. Dolore iusto tenetur sapiente in asperiores velit aut, praesentium magni quasi totam.</p>
                    </section>
                    <img src={im4} className={props.colorMode ? s.Nimg : s.Limg} alt="Book" onClick={(e)=>{
                      Script.showMore(e,moreBlock,setFlag,props.t,flag)}} title={props.t("about.tip")}/>
                </section>
            </div>
        </div>
        </>
    )
}
export default About