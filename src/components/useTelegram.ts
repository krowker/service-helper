declare global {
   interface Window {
       Telegram: any;
   }
}
const tg = window.Telegram.WebApp

export const useTelegram = () => {
   return {
      CloudStorage: tg.CloudStorage,
      user: tg.initDataUnsafe.user,
   }
}