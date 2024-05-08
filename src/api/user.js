const users = [
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',   
    mobile: '1234567890'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@gmail.com',     
    mobile: '12345678905'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@g]fmail.com',   
    mobile: '12345678905d'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@ggoatfmail.com',
    mobile: '123456789045'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@ggoatkmail.com',
    mobile: '123456789055'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@ggoatkmeaeil.com',
    mobile: '1234567890e525'
  },
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@ggoatkmeaeifl.com',
    mobile: '1234567890e523225'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babalolagideon22@kmail.com',
    mobile: '080658393250'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'gideon@yahoomail.com',
    mobile: '081497872275'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'gideon@mahoomail.com',
    mobile: '08149787227579'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'ade22@gmail.com',
    mobile: '081497872275799'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'favour22@gmail.com',
    mobile: '0814978722757998'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'fave22@gmail.com',
    mobile: '08149787227579988'
  },
  {
    firstname: 'Babalola',
    lastname: 'Gideon',
    email: 'storebase22@gmail.com',
    mobile: '081497872275799889'
  },
  {
    firstname: 'Joshua',
    lastname: 'Babalola',
    email: 'joshuababalola@gmail.com',
    mobile: '08448939003'
  },
  {
    firstname: 'iyanu',
    lastname: 'Babalola',
    email: 'iyanubabalola@gmail.com',
    mobile: '084489390903'
  },
  {
    firstname: 'aanu',
    lastname: 'Babalola',
    email: 'aanu@gmail.com',
    mobile: '0844893970903'
  },
  {
    firstname: 'bola',
    lastname: 'Babalola',
    email: 'bola@gmail.com',
    mobile: '08448939709039'
  },
  {
    firstname: 'bola',
    lastname: 'Babalola',
    email: 'bola@yahoomail.com',
    mobile: '084948939709039'
  },
  {
    firstname: 'Adelaja',
    lastname: 'Waheed',
    email: 'adelajawaheed36@gmail.com',
    mobile: '07014013006'
  },
  {
    firstname: 'ojieh',
    lastname: 'david',
    email: 'ojiehdavid5@gmail.com',
    mobile: '070140130069'
  },
  {
    firstname: 'ojih',
    lastname: 'hg',
    email: 'avid5@gmail.com',
    mobile: '0701401300699'
  },
  {
    firstname: 'ojih',
    lastname: 'hg',
    email: 'ojiehchucks5@gmail.com',
    mobile: '070140130069995'
  },
  {
    firstname: 'ojih',
    lastname: 'hg',
    email: 'ojiehchuks5@gmail.com',
    mobile: '0701401300699959'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'mymail@gmail.com',
    mobile: '9848489393'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'mymail@applemail.com',
    mobile: '123456789'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babalola.gideon@cu.edu.ng',
    mobile: '8920203499494030000'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'mymail@applemailq.com',
    mobile: '2345678'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'mymail@applemailquw.com',
    mobile: '2345678887'
  },
  {
    firstname: 'Desiny',
    lastname: 'Agbator',
    email: 'agbatordestiny@gmail.com',
    mobile: '80474838383'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'you@you.com',
    mobile: '133345556'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'me@j.com',
    mobile: '12345678'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'my@me.com',
    mobile: '123456781234'
  },
  {
    firstname: 'dave',
    lastname: 'gray',
    email: 'dave@gray.com',
    mobile: '123456789123'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babs@gmail.com',
    mobile: '12345678987654324000'
  },
  {
    firstname: 'chucks',
    lastname: 'ojieh',
    email: 'chuck@gmail.com',
    mobile: '99484983892864670'
  },
  {
    firstname: 'larry',
    lastname: 'fink',
    email: 'larry@fink.com',
    mobile: '8060551215'
  },
  {
    firstname: 'gidi',
    lastname: 'boy',
    email: 'gidi@boy.com',
    mobile: '98339022874940'
  },
  {
    firstname: 'Folajimi',
    lastname: 'Mohammed',
    email: 'mohammedfolajimi170@gmail.com',
    mobile: '8105683643'
  },
  {
    firstname: 'Chidera',
    lastname: 'Ugochukwu',
    email: 'ugochukwuc763@gmail.com',
    mobile: '9034251889'
  },
  {
    firstname: 'ojieh',
    lastname: 'david',
    email: 'my@mail.com',
    mobile: '0701'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'gideonbabalola69@gmail.com',
    mobile: '8149787227'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babalola.gideon@lmu.edu.ng',
    mobile: '0701393939'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babalolagideon22@gmail.com',
    mobile: '07013939399'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'babs@applemail.com',
    mobile: '070139393994'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'storebase@test.com',
    mobile: '0701393939949'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'twofactor@twofactor.com',
    mobile: '08122348595'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'twofactor@twofactorman.com',
    mobile: '081223448595'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'twofactor@twofactormandem.com',
    mobile: '0812234458595'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'twofactor@twofactormandemk.com',
    mobile: '08192234458595'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'twofactor@twofactormandemkl.com',
    mobile: '081922344558595'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'godisgood@life.com',
    mobile: '08056789372'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'seerbit@seerbit.com',
    mobile: '080567893725'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'final@final.com',
    mobile: '0805678937257'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'final@finally.com',
    mobile: '08056789372579'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'finally@finally.com',
    mobile: '080567893725799'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'finally@truellyfinally.com',
    mobile: '08056789372579388'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'golang@golang.com',
    mobile: '080567893725879388'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'frontend@test.com',
    mobile: '0805678937258793888'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'frontend@test.nextcom',
    mobile: '08056789372587938880'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'react@test.com',
    mobile: '94048483930303'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'react@vue.com',
    mobile: '940484839307303'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'react@vuejs.com',
    mobile: '9404848393079303'
  },
  {
    firstname: 'Holy',
    lastname: 'Spirit',
    email: 'holyspirit@spirit.com',
    mobile: '94048483930579303'
  },
  {
    firstname: 'Landmark',
    lastname: 'University',
    email: 'landmark@university.com',
    mobile: '812344849338'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'david@david.com',
    mobile: '948833920208'
  },
  {
    firstname: 'Angela',
    lastname: 'yu',
    email: 'angela@yu.com',
    mobile: '984849940303'
  },
  {
    firstname: 'gidi',
    lastname: 'boy',
    email: 'gidi@gidi.com',
    mobile: '84943993933'
  },
  {
    firstname: 'store',
    lastname: 'boss',
    email: 'store@boss.com',
    mobile: '48499302020'
  },
  {
    firstname: 'mark',
    lastname: 'zuck',
    email: 'mark@zuck.com',
    mobile: '93892392920930'
  },
  {
    firstname: 'bachi',
    lastname: 'miracle',
    email: 'bachi@miracle.com',
    mobile: '948383992090'
  },
  {
    firstname: 'taraba',
    lastname: 'sobajo',
    email: 'taraba@sobajo.com',
    mobile: '494939302929'
  },
  {
    firstname: 'flutter',
    lastname: 'developer',
    email: 'flutter@developer.com',
    mobile: '8599493839320'
  },
  {
    firstname: 'shopmart',
    lastname: 'staff',
    email: 'shopmart@shopmart.com',
    mobile: '49930394994'
  },
  {
    firstname: 'Last',
    lastname: 'Test',
    email: 'last@test.com',
    mobile: '4099399493992'
  },
  {
    firstname: 'covenant',
    lastname: 'University',
    email: 'covenant@university.com',
    mobile: '97778999889'
  },
  {
    firstname: 'netflix',
    lastname: 'netflix',
    email: 'netflix@netflix.com',
    mobile: '494030984899'
  },
  {
    firstname: 'benz',
    lastname: 'benz',
    email: 'benz@benz.com',
    mobile: '814978722748484'
  },
  {
    firstname: 'Holy Ghost',
    lastname: 'Spirit',
    email: 'holyspirit@spirite.com',
    mobile: '940484839305799303'
  },
  {
    firstname: 'Greg',
    lastname: 'Brockman',
    email: 'greg@brockman.com',
    mobile: '9839393030'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'fake@fake.com',
    mobile: '+443211233332223'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'boss@boss.com',
    mobile: '+2348134252119'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'boss@bos.com',
    mobile: '+2348060551215'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'king@king.com',
    mobile: '+23480605512135'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'gideonbabalola@outlook.com',
    mobile: '+23481497844'
  },
  {
    firstname: 'Gideon',
    lastname: 'Babalola',
    email: 'gideonbabalola@zohomail.com',
    mobile: '+2348149787227'
  }
]
export default users