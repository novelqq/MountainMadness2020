import React from 'react'

class StockTicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPos: 0,
            items: [],
        };
        this.scrolling = this.scrolling.bind(this);
    }
    componentDidMount() {
        this.activeInterval = setInterval(this.scrolling, 100);
    }

    componentWillMount() {
        this.getPiDigits();
    }

    scrolling() {
        if(this.state.items.length > 1) {
            const position = this.state.currentPos + 5;
            this.ticker.scrollTo({x: position, animated: true});
        }
    }
    componentWillUnmount() {
        clearInterval(this.activeInterval);
    }
    async getPiDigits() {
        let url = '';
        let url1 = 'https://api.pi.delivery/v1/pi?start=';
        let url2 = '&numberOfDigits=';
        let pairsArray = [];
        url = url1 + '0' + url2 + '1000';
        try {
            let fetchResponse = await fetch(url);
            let json = await fetchResponse.json();
            console.log(json.content);
            
            for(let inc = 0; inc < json.content.length - 3; inc++){
                let pair = '' + json.content.charAt(inc*2) + json.content.charAt((inc*2)+1) + json.content.charAt((inc*2)+2);
                pairsArray.push(pair);
            }

            this.setState({ items: pairsArray});
        }
        catch(err) {
            console.log(err);
        }
        


    }
    render(){
        return ( <div 
            styles={
                { height: '500px', overflowY: 'scroll' }
            } 
            style={styles.wrapperDiv}>
                

      </div>
        );
    }
}

export default StockTicker;
