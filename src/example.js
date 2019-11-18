import { EXMO_COIN_PACKAGES } from '../../Components/Pages/Cashback/Unauthorized/CashbackDescription/const';
import { numberFormat } from '../../tools/formatters';

const getNextPackageNumber = (currentNumber) => {
  return currentNumber !== undefined ? currentNumber + 1 : EXMO_COIN_PACKAGES.none;
};

export async function serializePackages(getPackages) {
  return new Promise(async (resolve, reject) => {
    try {
      const packages = await getPackages;

      let packageNumber = getNextPackageNumber();

      const serializedPackages = packages.reduce((serializedPackages, { id, params, price }) => {
        const info = JSON.parse(params);
        if (
          id === undefined ||
          typeof id === 'object' ||
          !(
            typeof info === 'object' &&
            typeof info.cashback === 'object' &&
            info.cashback.maker &&
            info.cashback.taker &&
            typeof price === 'string'
          )
        ) {
          throw new Error('Incorrect api response from market/getCashbackProductList');
        }

        packageNumber = getNextPackageNumber(packageNumber);
        const priceUsd = numberFormat(price, { decimalMax: 2 });

        const { cashback: { maker: takerPercent, taker: makerPercent }} = info;

        return {
          ...serializedPackages,
          [packageNumber]: {
            id,
            //fix migrations
            takerPercent: ((packageNumber+1)*8).toString(),
            makerPercent: ((packageNumber+1)*10).toString(),
            packageNumber,
            priceUsd
          }
        };
      }, {});

      resolve(serializedPackages);
    }
    catch(error) {
      reject(error);
    }
  })
}

export async function serializeSubscription(getSubscription) {
  return new Promise(async (resolve, reject) => {
    try {
      const subscription = await getSubscription;

      if (
        !(
          Array.isArray(subscription) &&
          subscription.length > 0 &&
          typeof subscription[0] === 'object' &&
          typeof subscription[0].product_id === 'string' &&
          typeof subscription[0].end_time === 'string'
        )
      ) {
        resolve({
          packageNumber: undefined
        });
      }

      const {
        product_id,
        end_time,
        is_auto_payment: renewActive = false,
        order_id
      } = subscription[0];

      const serializedSubscription = {
        id: product_id,
        paidBefore: Number(end_time*1000),
        renewActive,
        orderId: order_id
      };

      resolve(serializedSubscription);
    }
    catch(error) {
      reject(error);
    }
  });
}
