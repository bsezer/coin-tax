import { Injectable } from '@angular/core';

@Injectable()
export class TradeService {

  static DATA_SIZE = 100;
  data = [
    {
      id: 1,
      name: 'Bob the king',
      tradeType: "Trade",
      transactionDate: "10-07-2018",
      buyAmount: 20,
      buyCurrency: "BTC",
      sellAmount: 2000,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 2,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "10-09-2018",
      buyAmount: 3,
      buyCurrency: "BTC",
      sellAmount: 400,
      sellCurrency: "USD",
      tradingFeeAmount: 10,
      tradingFeeCurrency: "USD",
      other: "Ex dolorem officiis convenire usu."
    },
    {
      id: 3,
      name: 'Niche Name',
      tradeType: "Trade",
      transactionDate: "12-07-2018",
      buyAmount: 50,
      buyCurrency: "ETH",
      sellAmount: 280,
      sellCurrency: "USD",
      tradingFeeAmount: 8,
      tradingFeeCurrency: "USD",
      other: "Officiis convenire usu."
    },
    {
      id: 5,
      name: 'Brock Lesner',
      tradeType: "Trade",
      transactionDate: "7-07-2018",
      buyAmount: 2,
      buyCurrency: "BTC",
      sellAmount: 800,
      sellCurrency: "USD",
      tradingFeeAmount: 2,
      tradingFeeCurrency: "USD",
      other: "Ipsum dolor sit amet, convenire usu."
    },
    {
      id: 6,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "9-07-2018",
      buyAmount: 15,
      buyCurrency: "ETH",
      sellAmount: 20,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 1,
      name: 'Bob the king',
      tradeType: "Trade",
      transactionDate: "10-07-2018",
      buyAmount: 20,
      buyCurrency: "BTC",
      sellAmount: 2000,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 2,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "10-09-2018",
      buyAmount: 3,
      buyCurrency: "BTC",
      sellAmount: 400,
      sellCurrency: "USD",
      tradingFeeAmount: 10,
      tradingFeeCurrency: "USD",
      other: "Ex dolorem officiis convenire usu."
    },
    {
      id: 3,
      name: 'Niche Name',
      tradeType: "Trade",
      transactionDate: "12-07-2018",
      buyAmount: 50,
      buyCurrency: "ETH",
      sellAmount: 280,
      sellCurrency: "USD",
      tradingFeeAmount: 8,
      tradingFeeCurrency: "USD",
      other: "Officiis convenire usu."
    },
    {
      id: 5,
      name: 'Brock Lesner',
      tradeType: "Trade",
      transactionDate: "7-07-2018",
      buyAmount: 2,
      buyCurrency: "BTC",
      sellAmount: 800,
      sellCurrency: "USD",
      tradingFeeAmount: 2,
      tradingFeeCurrency: "USD",
      other: "Ipsum dolor sit amet, convenire usu."
    },
    {
      id: 6,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "9-07-2018",
      buyAmount: 15,
      buyCurrency: "ETH",
      sellAmount: 20,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 1,
      name: 'Bob the king',
      tradeType: "Trade",
      transactionDate: "10-07-2018",
      buyAmount: 20,
      buyCurrency: "BTC",
      sellAmount: 2000,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    {
      id: 2,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "10-09-2018",
      buyAmount: 3,
      buyCurrency: "BTC",
      sellAmount: 400,
      sellCurrency: "USD",
      tradingFeeAmount: 10,
      tradingFeeCurrency: "USD",
      other: "Ex dolorem officiis convenire usu."
    },
    {
      id: 3,
      name: 'Niche Name',
      tradeType: "Trade",
      transactionDate: "12-07-2018",
      buyAmount: 50,
      buyCurrency: "ETH",
      sellAmount: 280,
      sellCurrency: "USD",
      tradingFeeAmount: 8,
      tradingFeeCurrency: "USD",
      other: "Officiis convenire usu."
    },
    {
      id: 5,
      name: 'Brock Lesner',
      tradeType: "Trade",
      transactionDate: "7-07-2018",
      buyAmount: 2,
      buyCurrency: "BTC",
      sellAmount: 800,
      sellCurrency: "USD",
      tradingFeeAmount: 2,
      tradingFeeCurrency: "USD",
      other: "Ipsum dolor sit amet, convenire usu."
    },
    {
      id: 6,
      name: 'Nicholas DuBuque',
      tradeType: "Trade",
      transactionDate: "9-07-2018",
      buyAmount: 15,
      buyCurrency: "ETH",
      sellAmount: 20,
      sellCurrency: "USD",
      tradingFeeAmount: 20,
      tradingFeeCurrency: "USD",
      other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
    },
    
  ];
  // emulating request to the server
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.generateData());
      }, 1000);
    });
  }

//   getNewExampleObj(n?: number): any {
//     n = typeof n !== 'undefined' ? n : Math.random() * 1000;
//     return {
//       id: n,
//       name: `Jack London ${n}`,
//       username: `jack_london_${n}`,
//       email: `jack_london_${n}@example.com`,
//     };
//   }

//   protected generateData(): Array<any> {
//     const data = [];
//     for (let i = 0; i < TradeService.DATA_SIZE; i++) {
//       data.push(this.getNewExampleObj(i));
//     }
//     return data;
//   }

  protected generateData(): Array<any> {
    return this.data;
  }
}