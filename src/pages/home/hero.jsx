import { Component } from "react";
import StockBg from "../../assets/img/stock-bg.jpg"

export default class Hero extends Component {
    render() {
        return (
            <div id="hero" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={StockBg} className="d-block w-100" alt="Trading monitor" />
                        <div className="carousel-caption d-none d-md-block py-5 px-2">
                            <h6>MULAI SEKARANG</h6>
                            <h1><strong>Belajar Saham Menjadi Gampang</strong></h1>
                            <p>Kami hadir untuk membantu Anda memahami seluk beluk investasi saham dan memberikan edukasi yang terbaik agar Anda dapat menjadi investor yang sukses.</p>
                            <form className="row g-2 justify-content-center">
                                <div className="col-auto">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@mail.com" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">Subscribe newsletter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}