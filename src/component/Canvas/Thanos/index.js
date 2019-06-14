import React from "react";
import chance from "chance";
import html2canvas from "html2canvas";
import "./index.less";

let isPlay = false;

class Thanos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tips:    "",
            showBtn: false
        };
        this.imageRef = React.createRef();
        this.imageBoxRef = React.createRef();
    }
    componentDidMount() {
        let audioContext = new (window.AudioContext || window.webkitAudioContext)();
        let mediaStreamSource = null;
        let scriptProcessor = null;
        let tips = "";
        let showBtn = false;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // 获取用户的 media 信息
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(stream => {
                    tips = "靠近麦克风打个响指试试 close mic and snap fingers";
                    // 将麦克风的声音输入这个对象
                    mediaStreamSource = audioContext.createMediaStreamSource(stream);
                    // 创建一个音频分析对象，采样的缓冲区大小为4096，输入和输出都是单声道
                    scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
                    // 将该分析对象与麦克风音频进行连接
                    mediaStreamSource.connect(scriptProcessor);
                    // 此举无甚效果，仅仅是因为解决 Chrome 自身的 bug
                    scriptProcessor.connect(audioContext.destination);

                    // 开始处理音频
                    scriptProcessor.onaudioprocess = function(e) {
                        if (isPlay) return;
                        // 获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
                        const buffer = e.inputBuffer.getChannelData(0);
                        // 获取缓冲区中最大的音量值
                        const maxVal = Math.max.apply(Math, buffer);
                        // 显示音量值
                        if (maxVal > 0.9) {
                            tips = "成功 success";
                            this.startAnimation();
                        }
                    };
                })
                .catch(error => {
                    tips = "获取音频时好像出了点问题，试试点击按钮触发吧<br>" + error + ", try click button.";
                    showBtn = true;
                });
        } else {
            showBtn = true;
            tips = "不支持获取媒体接口,试试点击按钮触发吧 try click button.";
        }
        this.setState({
            tips,
            showBtn
        });
    }
    startAnimation = () => {
        this.imageRef.current.classList.remove("quickFade");
        this.snap();
    };
    snap = () => {
        isPlay = true;
        html2canvas(this.imageBoxRef.current, {
            allowTaint:      0,
            useCORS:         true,
            backgroundColor: "transparent"
        })
            .then(canvas => {
                const canvasCount = 20;
                const ctx = canvas.getContext("2d");
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixelArr = imageData.data;
                const data = imageData.data.slice(0).fill(0);
                let imageDataArray = Array.from({ length: canvasCount }, () => data.slice(0));

                for (let i = 0; i < pixelArr.length; i += 4) {
                    const p = Math.floor((i / pixelArr.length) * canvasCount);
                    const a = imageDataArray[weightedRandomDistrib(p, canvasCount)];

                    a[i] = pixelArr[i];
                    a[i + 1] = pixelArr[i + 1];
                    a[i + 2] = pixelArr[i + 2];
                    a[i + 3] = pixelArr[i + 3];
                }

                for (let i = 0; i < canvasCount; i++) {
                    const c = newCanvasFromImageData(imageDataArray[i], canvas.width, canvas.height);
                    c.classList.add("dust");
                    setTimeout(() => {
                        animateTransform(c, 200, -100, chance.integer({ min: -25, max: 25 }), 2000);
                        c.classList.add("blur");
                        setTimeout(() => {
                            c.remove();
                        }, 2050);
                    }, 70 * i);

                    this.imageBoxRef.current.appendChild(c);
                }

                Array.from(this.imageBoxRef.current.querySelectorAll(":not(.dust)")).map(el => {
                    el.classList.add("quickFade");
                });
            })
            .catch(function() {});
    };
    render() {
        return (
            <div>
                <p className="tips">{this.state.tips}</p>
                {this.state.showBtn ? (
                    <button className="btn" onClick={this.startAnimation}>
                        响指
                    </button>
                ) : null}
                <div className="content">
                    <div ref={this.imageBoxRef}>
                        <img src="https://i.loli.net/2019/05/06/5ccffa469ec52.jpg" width="400" ref={this.imageRef} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Thanos;

function weightedRandomDistrib(peak, count) {
    const prob = [],
        seq = [];
    for (let i = 0; i < count; i++) {
        prob.push(Math.pow(count - Math.abs(peak - i), 6));
        seq.push(i);
    }
    return chance.weighted(seq, prob);
}

function animateTransform(elem, sx, sy, angle, duration) {
    elem.animate(
        [
            { transform: "rotate(0) translate(0, 0)" },
            {
                transform: "rotate(" + angle + "deg) translate(" + sx + "px," + sy + "px)"
            }
        ],
        {
            duration: duration,
            easing:   "ease-in"
        }
    );
}

function newCanvasFromImageData(imageDataArray, w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const tempCtx = canvas.getContext("2d");
    tempCtx.putImageData(new ImageData(imageDataArray, w, h), 0, 0);

    return canvas;
}
