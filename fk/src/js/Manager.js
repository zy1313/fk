    $(()=>{
        $.ajax({
            type: "get",
            url: "../server/datapic.php",
            data: "data",
            dataType: "json",
            success: function (data) {
                let manager = new Manager(data);
                    manager.init();
            }
        });
        class Manager {
            constructor(data) {
                this.sliderBox = null;
                this.sliderControl = null;
                this.sliderNav = null;
                this.slider = null;
                this.data = data;
                this.index = 0;
                this.sliderBoxItemWidth = 1200;
                this.timer = null;
            }
            init() {
                this.render();
                // this.setRandomColor();
                this.autoPlayer();
                this.addMouseHandler();
                this.addClickHandler();
                this.addClickHandlerWithNavItem();
                this.checkSelectorItem(0);
                console.log($(".sliderWarp"));
                
            }
            next() {
                this.index++;
                if (this.index == this.data.length) {
                    this.index = 0;
                }
                /* 临界值检查：如果超出(最后)应该要切换为第一张 */
                this.sliderBox.style.left = -(this.sliderBoxItemWidth * this.index) + "px";
                this.checkSelectorItem(this.index);
            }
            prev() {
                this.index--;
                if (this.index == -1) {
                    this.index = this.data.length - 1;
                }
                this.sliderBox.style.left = -(this.sliderBoxItemWidth * this.index) + "px";
                this.checkSelectorItem(this.index);
            }
            autoPlayer() {
                /* 定时器：每隔固定的时间就设置sliderBox的样式(left) */
                this.timer = setInterval(() => this.next(), 3000);
            }
            addMouseHandler() {
                /* 当鼠标移入的时候，停止播放，鼠标离开的时候恢复 */
                this.slider.onmouseenter = () => clearInterval(this.timer);
                this.slider.onmouseleave = () => this.autoPlayer();
            }
            addClickHandler() {
                this.sliderControl.onclick = (e) => {
                    e = e || window.event;
                    let target = e.target || e.srcElement;
                    if (target.className == "prev") {
                        this.prev();
                    } else if (target.className == "next") {
                        this.next();
                    }
                }
            }
            addClickHandlerWithNavItem() {
                /* 给标签添加点击事件，当标签被点击的时候设置当前标签的选中状态 + 切换图片 */
                let items = this.sliderNav.children;
                Array.from(items).forEach((ele, index) => {
                    let self = this;
                   //  console.log(self);
                    ele.onclick = function() {
                        self.checkSelectorItem(index);
                        /* 切换图片 */
                        self.index = index;
                        self.sliderBox.style.left = -(self.sliderBoxItemWidth * self.index) + "px";
                    }
                })
            }
            checkSelectorItem(index) {
                Array.from(this.sliderNav.children).forEach(ele => ele.classList.remove("active"));
                this.sliderNav.children[index].classList.add("active");
            }
            render() {
                /* 先把UI效果写出来 */
                this.renderBox();
                this.renderControl();
                this.renderNav();
                this.slider = document.createElement("div");
                this.slider.className = "slider";
                this.slider.appendChild(this.sliderBox);
                this.slider.appendChild(this.sliderControl);
                this.slider.appendChild(this.sliderNav);
                // document.body.appendChild(this.slider);
                $(".sliderWarp").append(this.slider)
            }
            renderBox() {
                this.sliderBox = document.createElement("ul");
                this.sliderBox.className = "slider-box";
                let html = "";
                for (let i = 1; i <= this.data.length; i++) {
                    html += `<li class="slider-box-item"><img src=${this.data[i-1].src}></li>`
                }
                this.sliderBox.innerHTML = html;
                console.log(this.sliderBox);
            }
            renderControl() {
                this.sliderControl = document.createElement("div");
                this.sliderControl.className = "slider-control";
                this.sliderControl.innerHTML = `<span class="prev">&lt;</span> <span class="next">&gt;</span>`;
            }
            renderNav() {
                this.sliderNav = document.createElement("ol");
                this.sliderNav.className = "slider-nav";
                let html = "";
                for (let i = 0; i < this.data.length; i++) {
                    html += `<li class="slider-nav-item"></li>`
                }
   
                this.sliderNav.innerHTML = html;
            }
            // setRandomColor() {
            //     /* 获取每个li标签，设置随机背景颜色  */
            //     function getRandomColor() {
            //         let r = Math.ceil(Math.random() * 255)
            //         let g = Math.ceil(Math.random() * 255)
            //         let b = Math.ceil(Math.random() * 255)
            //         let a = Math.random();
            //         return `rgba(${r},${g},${b},${a})`;
            //     }
            //     Array.from(this.sliderBox.children).forEach(ele => {
            //         ele.style.background = getRandomColor();
            //     });
            // }
        }
    }) 
    