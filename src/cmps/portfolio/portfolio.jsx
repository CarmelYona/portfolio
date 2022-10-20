import { useEffect, useState } from 'react'
import MrBitCoin from '../../assets/img/Mr.BitCoin-img.jpeg'
import BitTheList from '../../assets/img/BitTheList.jpeg'
import NetApp from '../../assets/img/NetApp.jpeg'
import OtpService from '../../assets/img/OTP-Service.jpeg'
export const Portfolio = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const newData = [
            {
                id: 101,
                img: MrBitCoin,
                title: 'Mr.BitCoin',
                github: 'https://github.com/CarmelYona/Mr.BitCoin',
                demo: 'https://carmelyona.github.io/Mr.BitCoin/#/'
            },
            {
                id: 102,
                img: BitTheList,
                title: 'BitTheList',
                github: 'https://github.com/CarmelYona/BitTheList_Frontend',
                demo: 'https://carmelyona.herokuapp.com/'
            },
            {
                id: 103,
                img: NetApp,
                title: 'NetApp',
                github: 'https://github.com/CarmelYona/carmel-yona-26-07-2022-frontend',
                demo: 'https://netapp11.herokuapp.com/'
            },
            {
                id: 104,
                img: OtpService,
                title: 'OtpService',
                github: 'https://github.com/CarmelYona/OTP_service',
                demo: null
            },
        ]
        setData(newData)
    }
    return <section id="protfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">
            {data &&
                data.map(({ id, img, title, github, demo }) => {
                    return <article key={id} className="portfolio-item">
                        <div className="portfolio-item-img">
                            <img src={img} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio-item-cta">
                            <a href={github} className="btn" target="_blank">Github</a>
                            {demo && <a href={demo} className="btn btn-primary" target="_blank">Live</a>}
                        </div>
                    </article>
                })}
        </div>
    </section>
}