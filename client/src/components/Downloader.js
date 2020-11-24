import React, { Component } from 'react';
import {description} from '../texts/description';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';


class Downloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"",
            format:"mp4",
            loader: false,
            link:false
        };
    }

    handleChangle = (event) => {
        this.setState((state, props) => {
            return { [event.target.name]:event.target.value}
        })
    }
    handleClick = async () => {
        if (this.state.url && this.state.format){
            try {
                this.setState({loader:true, data:'',link:false});
                const result = fetch(`https://video-mp3-download.fun/api/info?URL=${this.state.url}&format=${this.state.format}`);
                const info = await result;
                const data = await info.json();
                this.setState ({data})
                }
            catch (e) {}
        }
    }
    loader = () =>{
        if (this.state.loader) {
            return (<center><Loader type="TailSpin"
                                    color="#44c767"
                                    height={100}
                                    width={100}
            /></center>)
        }
    }

    simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 8000));
      }
    loaderLink = () => {
        if (!this.state.link) {
            this.simulateNetworkRequest().then(()=> {this.setState({link:true, loader:false}); })
        }
        if (this.state.link) {
            return (<span className="linkToDownload"><a href={`https://video-mp3-download.fun/api/download?URL=${this.state.url}&format=${this.state.format}`}>Скачать</a></span>)
       }   
    }
    handleInfo = () => {

        if (this.state.data){
            return (
                <div className="info">
                    <img src={`${this.state.data.thumbnail}`} className="infoImg" alt={this.state.data.title}/>
                    <span className="infoTitle">{this.state.data.title}</span>
                    <span className="infoAuthor">{this.state.data.author}</span>
                    <center>{this.loaderLink()}</center>
                </div>
            )
        }
        return null;
    }

    render() { 
        document.title="Скачать видео и MP3 с Youtube Бесплатно - Video-MP3-download.fun";
        document.getElementsByTagName("meta")[1].content="Скачать видео MP4 и музыку из видео в MP3 формате с Ютуба ✅Бесплатно ✅Быстро";

        return (
            <div className="container">
                <div className="content">
                    <div className="downloader">
                    <input placeholder="https://youtube.com/Jsk3LrmV4f" onChange={this.handleChangle} name="url"></input>
                    <div className="extension">
                    <select onChange={this.handleChangle} name="format">
                        <option value="mp4">MP4</option>
                        <option value="mp3">MP3</option> 
                    </select>
                    <button 
                        onClick={this.handleClick} 
                        className="saveButton"
                        disabled={this.state.loader}>
                        {this.state.loader ? 'loading....' : 'СКАЧАТЬ'}
                    </button>
                    </div>
                    <div>
                        <span className="infoRules">Используя наш сервис, вы соглашаетесь с <Link to='/rules'>Правилами Пользования</Link></span>
                        {this.handleInfo()}
                        {this.loader()}
                    </div>
                    </div>
                </div>
                {description()}
            </div>
         );
    }
}

export default Downloader;
