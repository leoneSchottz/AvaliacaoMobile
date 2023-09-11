
import { useState } from 'react';
import { Button, ScrollView, StyleSheet,Text, TextInput, View } from 'react-native';

const ApareceJson = () => {
  const [vowels] = useState({
    cep: "20030-041",
    logradouro: "Rua Santa Luzia",
    complemento: "de 407 ao fim - lado ímpar",
    bairro: "Centro",
    localidade: "Rio de Janeiro",
    uf: "RJ",
    ibge: "3304557",
    gia: "",
    ddd: "21",
    siafi: "6001"
  });

  const jsondata = {
    "date": "2023-09-11",
    "usd": {
        "00": 13.12326021,
        "1inch": 4.23468976,
        "aave": 0.018651301,
        "abt": 13.33323237,
        "ach": 73.74575428,
        "acs": 534.18398936,
        "ada": 3.90409225,
        "aed": 3.6725,
        "aergo": 11.15440522,
        "afn": 80.41707517,
        "agld": 1.84978252,
        "aioz": 88.88821583,
        "akt": 1.06006539,
        "alcx": 0.092207693,
        "aleph": 13.65177376,
        "algo": 10.96877894,
        "alice": 1.30889061,
        "all": 100.09844915,
        "amd": 383.60239229,
        "amp": 572.75339053,
        "ang": 1.79136557,
        "ankr": 54.80912185,
        "ant": 0.23174796,
        "aoa": 834.06989545,
        "ape": 0.82620769,
        "api3": 0.95601571,
        "apt": 0.19584413,
        "ar": 0.24942015,
        "arb": 1.19632692,
        "arpa": 21.69180972,
        "ars": 349.45944251,
        "asm": 95.87655111,
        "ast": 11.81325963,
        "ata": 13.4769869,
        "atom": 0.15177435,
        "ats": 12.8365424,
        "auction": 0.22123726,
        "aud": 1.56142153,
        "audio": 6.57025248,
        "aurora": 18.01788159,
        "avax": 0.10652107,
        "avt": 1.2658132,
        "awg": 1.79,
        "axl": 2.81608682,
        "axs": 0.22999872,
        "azm": 8499.73307116,
        "azn": 1.69994661,
        "badger": 0.50761037,
        "bake": 10.65032584,
        "bal": 0.30348784,
        "bam": 1.82453106,
        "band": 0.99205598,
        "bat": 6.04412928,
        "bbd": 2,
        "bch": 0.0052180687,
        "bdt": 109.68532952,
        "bef": 37.63179849,
        "bgn": 1.82453106,
        "bhd": 0.376,
        "bico": 4.99122749,
        "bif": 2828.87062829,
        "bit": 2.36908891,
        "blur": 5.66728494,
        "blz": 7.34478464,
        "bmd": 1,
        "bnb": 0.0047292935,
        "bnd": 1.36357666,
        "bnt": 2.47400403,
        "bob": 6.89962697,
        "boba": 8.44588199,
        "bond": 0.46108763,
        "brl": 4.98178292,
        "bsd": 1,
        "bsv": 0.033853534,
        "bsw": 16.45077331,
        "btc": 0.0000381465,
        "btcb": 0.000038923067,
        "btg": 0.080649697,
        "btn": 82.93421617,
        "btrst": 3.18468926,
        "btt": 2521094.47994982,
        "busd": 1.00005184,
        "bwp": 13.69617299,
        "byn": 2.49982222,
        "byr": 24998.22215114,
        "bzd": 2.01305229,
        "c98": 7.59872666,
        "cad": 1.36266697,
        "cake": 0.81969861,
        "cbeth": 0.00058993297,
        "cdf": 2494.37493684,
        "celo": 2.45580058,
        "celr": 85.57915516,
        "cfx": 8.30374633,
        "cgld": 2.42716609,
        "chf": 0.89176189,
        "chz": 17.61278032,
        "clp": 896.12404614,
        "clv": 32.30993306,
        "cnh": 7.34158717,
        "cny": 7.31430329,
        "comp": 0.027355208,
        "cop": 4014.55595083,
        "coti": 23.64048293,
        "coval": 129.78487061,
        "crc": 538.50108664,
        "cro": 19.31674004,
        "crpt": 15.06012693,
        "crv": 2.36671655,
        "cspr": 30.07252241,
        "ctsi": 8.17989716,
        "ctx": 1.05262361,
        "cuc": 1,
        "cup": 23.96749493,
        "cvc": 14.69496588,
        "cve": 102.86734521,
        "cvx": 0.4081277,
        "cyp": 0.54598334,
        "czk": 22.77028906,
        "dai": 1.00089378,
        "dar": 11.69581787,
        "dash": 0.039459065,
        "dcr": 0.077869777,
        "ddx": 14.69744037,
        "dem": 1.82453106,
        "deso": 0.1144811,
        "dext": 1.69533344,
        "dfi": 2.91369533,
        "dia": 4.51066748,
        "dimo": 10.47441529,
        "djf": 177.79938232,
        "dkk": 6.95760217,
        "dnt": 40.89948581,
        "doge": 15.91133369,
        "dop": 56.78568946,
        "dot": 0.23577758,
        "drep": 4.29550012,
        "dydx": 0.5210511,
        "dyp": 7.97187841,
        "dzd": 137.2081611,
        "eek": 14.59624847,
        "egld": 0.042920726,
        "egp": 30.84518453,
        "ela": 0.64122631,
        "enj": 4.2463256,
        "ens": 0.13449797,
        "eos": 1.79152321,
        "ern": 15,
        "esp": 155.21616125,
        "etb": 55.21754533,
        "etc": 0.066607169,
        "eth": 0.0006121792,
        "eth2": 0.00061853735,
        "eur": 0.93286792,
        "euroc": 0.93356899,
        "farm": 0.04641413,
        "fei": 1.01192459,
        "fet": 4.33084638,
        "fida": 6.15948524,
        "fil": 0.32366626,
        "fim": 5.54658076,
        "fis": 4.12368012,
        "fjd": 2.2844165,
        "fkp": 0.800381,
        "flow": 2.4427029,
        "flr": 80.8980033,
        "fort": 9.27206702,
        "forth": 0.36035763,
        "fox": 39.52539241,
        "frax": 1.00365862,
        "frf": 6.1192124,
        "ftm": 5.23183321,
        "ftt": 0.94247119,
        "fx": 7.33401121,
        "fxs": 0.19910807,
        "gal": 0.88573289,
        "gala": 69.08518403,
        "gbp": 0.800381,
        "gel": 2.62212807,
        "gfi": 2.70670572,
        "ggp": 0.800381,
        "ghc": 114176.85491291,
        "ghs": 11.41768549,
        "ghst": 1.30122632,
        "gip": 0.800381,
        "glm": 6.07898133,
        "gmd": 60.5337447,
        "gmt": 6.61589433,
        "gmx": 0.032593645,
        "gnf": 8570.41387118,
        "gno": 0.010048817,
        "gnt": 6.07152072,
        "gods": 5.91029539,
        "grd": 317.87474274,
        "grt": 12.08978534,
        "gst": 104.96955105,
        "gt": 0.26081258,
        "gtc": 1.06951062,
        "gtq": 7.86114074,
        "gusd": 1.00271785,
        "gyd": 208.63397893,
        "gyen": 145.75024458,
        "hbar": 21.10399593,
        "hft": 3.21127947,
        "high": 0.77458747,
        "hkd": 7.84015866,
        "hnl": 24.59665352,
        "hnt": 0.71928108,
        "hopr": 23.55694766,
        "hot": 955.37128217,
        "hrk": 7.02869332,
        "ht": 0.41727017,
        "htg": 135.16675043,
        "huf": 359.20390926,
        "icp": 0.32564825,
        "idex": 21.03033498,
        "idr": 15353.48181738,
        "iep": 0.73469319,
        "ils": 3.84413648,
        "ilv": 0.024959252,
        "imp": 0.800381,
        "imx": 1.9742852,
        "index": 0.94338908,
        "inj": 0.15141216,
        "inr": 82.93421617,
        "inv": 0.036284196,
        "iotx": 65.57327397,
        "iqd": 1308.66748474,
        "irr": 42325.29552851,
        "isk": 134.06064853,
        "itl": 1806.28416178,
        "jasmy": 277.39041001,
        "jep": 0.800381,
        "jmd": 154.360454,
        "jod": 0.709,
        "jpy": 146.85033401,
        "jup": 885.88899638,
        "kas": 24.77447738,
        "kava": 1.5701624,
        "kcs": 0.24441271,
        "kda": 1.89188664,
        "keep": 12.14172448,
        "kes": 146.24443245,
        "kgs": 88.37907543,
        "khr": 4139.24388839,
        "klay": 7.64448946,
        "kmf": 458.94093021,
        "knc": 1.92279072,
        "kpw": 899.94461554,
        "krl": 4.59978118,
        "krw": 1333.73642195,
        "ksm": 0.054389231,
        "kwd": 0.30844703,
        "kyd": 0.82205255,
        "kzt": 464.35379822,
        "lak": 19809.60532172,
        "lbp": 15238.1220164,
        "lcx": 27.06339454,
        "ldo": 0.6820291,
        "leo": 0.26053641,
        "link": 0.16678296,
        "lit": 1.59133104,
        "lkr": 322.70049019,
        "loka": 5.30781544,
        "loom": 23.21332058,
        "lpt": 0.15822665,
        "lqty": 1.30088777,
        "lrc": 5.45100262,
        "lrd": 186.29397719,
        "lseth": 0.00060370523,
        "lsl": 19.08243344,
        "ltc": 0.01622376,
        "ltl": 3.22100634,
        "luf": 37.63179849,
        "luna": 2.1167716,
        "lunc": 16983.73942015,
        "lvl": 0.65561957,
        "lyd": 4.84868484,
        "mad": 10.18733821,
        "magic": 2.19056392,
        "mana": 3.60798479,
        "mask": 0.39603661,
        "math": 14.93640669,
        "matic": 1.92987207,
        "mco2": 0.45044704,
        "mdl": 17.93102853,
        "mdt": 21.3127116,
        "media": 0.16181107,
        "metis": 0.08964522,
        "mga": 4510.11593412,
        "mgf": 22550.57967059,
        "mina": 2.68364319,
        "miota": 5.90902362,
        "mir": 73.24431374,
        "mkd": 57.5077656,
        "mkr": 0.00089978173,
        "mln": 0.072621091,
        "mmk": 2098.31264777,
        "mnde": 23.62093842,
        "mnt": 3475.83151366,
        "mona": 0.0032177377,
        "mop": 8.07536342,
        "mpl": 0.21786327,
        "mro": 384.29056994,
        "mru": 38.42905699,
        "msol": 0.048273832,
        "mtl": 0.4004802,
        "multi": 0.56378085,
        "mur": 45.16314169,
        "musd": 1.00336263,
        "muse": 0.18060185,
        "mvr": 15.38890901,
        "mwk": 1079.93254698,
        "mxc": 104.65645506,
        "mxn": 17.5559072,
        "mxv": 2.22704319,
        "myr": 4.67294155,
        "mzm": 63866.49677199,
        "mzn": 63.86649677,
        "nad": 19.08243344,
        "nct": 111.41976914,
        "near": 0.8800108,
        "neo": 0.1418505,
        "nest": 183.55486075,
        "nexo": 1.7615914,
        "nft": 3225851.05366161,
        "ngn": 788.77076718,
        "nio": 36.54740695,
        "nkn": 11.28023044,
        "nlg": 2.05577036,
        "nmr": 0.07587196,
        "nok": 10.65734262,
        "npr": 132.75694653,
        "nu": 18.46212791,
        "nzd": 1.69351493,
        "ocean": 3.21179518,
        "ogn": 11.13391336,
        "okb": 0.023942137,
        "omg": 2.26959359,
        "omr": 0.3849943,
        "one": 107.29391815,
        "ooki": 540.83411727,
        "op": 0.795509,
        "orca": 1.27908983,
        "orn": 1.86914473,
        "osmo": 2.95549705,
        "oxt": 17.4366596,
        "pab": 1,
        "pax": 1.00415969,
        "paxg": 0.0005264066,
        "pen": 3.71898736,
        "pepe": 1450517.10254863,
        "perp": 1.35822401,
        "pgk": 3.61010584,
        "php": 56.59203522,
        "pkr": 305.00559499,
        "pla": 7.02735368,
        "pln": 4.30677793,
        "plu": 0.15961571,
        "png": 52.45174026,
        "pols": 3.89860596,
        "poly": 8.15987293,
        "pond": 125.54832744,
        "powr": 7.54142103,
        "prime": 0.22040829,
        "pro": 3.58163477,
        "prq": 15.34907794,
        "pte": 187.02322575,
        "pundix": 2.99937741,
        "pyg": 7254.74306278,
        "pyr": 0.27585998,
        "pyusd": 1.00004243,
        "qar": 3.64,
        "qi": 192.75104628,
        "qnt": 0.010286919,
        "qsp": 98.03847334,
        "qtum": 0.48653581,
        "quick": 0.023900393,
        "rad": 0.749058,
        "rai": 0.3669697,
        "rare": 16.54247193,
        "rari": 1.0810729,
        "rbn": 5.27839761,
        "ren": 22.14822654,
        "rep": 0.94204571,
        "repv2": 0.94204571,
        "req": 15.72315138,
        "rgt": 1.37974099,
        "rlc": 0.96898491,
        "rly": 147.79131664,
        "rndr": 0.67978319,
        "rol": 46328.31216717,
        "ron": 4.63283122,
        "rose": 25.81291761,
        "rpl": 0.044028123,
        "rsd": 109.52728006,
        "rub": 97.75716436,
        "rune": 0.65386439,
        "rvn": 68.17994444,
        "rwf": 1202.57664227,
        "sand": 3.41634463,
        "sar": 3.75,
        "sbd": 8.43194575,
        "scr": 12.85802525,
        "sdd": 60098.17686091,
        "sdg": 600.98176861,
        "sei": 8.30558495,
        "sek": 11.09175213,
        "sgd": 1.36357666,
        "shib": 136896.96847034,
        "shp": 0.800381,
        "shping": 182.0485032,
        "sit": 223.55246765,
        "skk": 28.10357887,
        "skl": 43.57265482,
        "sle": 22.15310489,
        "sll": 22153.10489065,
        "snt": 45.75577342,
        "snx": 0.46880582,
        "sol": 0.055358913,
        "sos": 568.93399031,
        "spa": 260.85624836,
        "spell": 2545.15761791,
        "spl": 0.16666667,
        "srd": 38.4654273,
        "srg": 38465.42729703,
        "ssp": 600.99505933,
        "std": 22901.15945376,
        "stg": 1.91505311,
        "stn": 22.90115945,
        "storj": 3.27973902,
        "stx": 2.24828291,
        "sui": 2.236023,
        "suku": 25.83959762,
        "super": 12.48507932,
        "sushi": 1.75591296,
        "svc": 8.75,
        "swftc": 921.65200744,
        "sylo": 822.70047559,
        "syn": 3.16954811,
        "syp": 13001.48797443,
        "szl": 19.08243344,
        "t": 58.87503256,
        "thb": 35.54884854,
        "theta": 1.67406283,
        "time": 0.060863812,
        "tjs": 10.97195857,
        "tmm": 17467.76934652,
        "tmt": 3.49355387,
        "tnd": 3.13112487,
        "ton": 0.58643712,
        "tone": 87.37373771,
        "top": 2.39405112,
        "trac": 4.47824643,
        "trb": 0.039848274,
        "tribe": 3.85800478,
        "trl": 26826999.81213029,
        "tru": 32.10248565,
        "trx": 12.7938916,
        "try": 26.82699981,
        "ttd": 6.77154847,
        "ttt": 320.52215261,
        "tusd": 1.00186975,
        "tvd": 1.56142153,
        "tvk": 51.33431356,
        "twd": 32.04095786,
        "twt": 1.3485874,
        "tzs": 2503.0197879,
        "uah": 36.91711513,
        "ugx": 3730.41169208,
        "uma": 0.71761208,
        "unfi": 0.12706384,
        "uni": 0.2372172,
        "upi": 793.42842578,
        "usd": 1,
        "usdc": 0.99999684,
        "usdd": 1.00315926,
        "usdp": 1.00906765,
        "usdt": 1.00030866,
        "ust": 85.28720069,
        "uyu": 37.83949096,
        "uzs": 12170.92853221,
        "val": 1806.28416178,
        "veb": 3342333685.507815,
        "ved": 33.42299247,
        "vef": 3342299.24709803,
        "ves": 33.42299247,
        "vet": 66.28635217,
        "vgx": 7.87985633,
        "vnd": 23967.71941012,
        "voxel": 7.51309112,
        "vuv": 122.30793772,
        "wampl": 0.43955711,
        "waves": 0.64455963,
        "waxl": 2.81569035,
        "wbtc": 0.000038899551,
        "wcfg": 4.10674508,
        "wemix": 1.7759583,
        "wluna": 17378.54937516,
        "woo": 6.4268896,
        "wst": 2.78787742,
        "xaf": 611.92124027,
        "xag": 0.043407532,
        "xau": 0.0005201783,
        "xaut": 0.00052043176,
        "xbt": 0.0000381465,
        "xcd": 2.70162254,
        "xch": 0.036010576,
        "xcn": 1342.27171554,
        "xdc": 18.37436309,
        "xdr": 0.7572447,
        "xec": 44487.36107722,
        "xem": 41.52019059,
        "xlm": 7.39778239,
        "xmon": 0.00087767925,
        "xmr": 0.0070236589,
        "xof": 611.92124027,
        "xpd": 0.000827149,
        "xpf": 111.32075383,
        "xpt": 0.0011095538,
        "xrp": 1.9922126,
        "xtz": 1.49311652,
        "xyo": 329.48679673,
        "yer": 250.16237864,
        "yfi": 0.0001899974,
        "yfii": 0.0023761183,
        "zar": 19.08243344,
        "zec": 0.040408804,
        "zen": 0.14409113,
        "zil": 64.22669057,
        "zmk": 20749.09846566,
        "zmw": 20.74909847,
        "zrx": 5.98582801,
        "zwd": 361.9,
        "zwl": 4635.62406952
    }
}
  const campo = JSON.stringify(jsondata,null, 2)

  const [valormostrado, definevalormostrado] = useState([]);
  const valorreal = jsondata.usd.brl

  const mostrarValor = () => {
    definevalormostrado(valorreal);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.jsonData} >{campo}</Text>
      <Button title='Valor Mostrado' onPress={mostrarValor} styles={styles.button} />
      <Text style={styles.resultado} >{valormostrado}</Text>
    </ScrollView>
  )

}
const App = () => {
  return (
    <View style={styles.container}>
      <ApareceJson />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  inputTypeDesign: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
    marginBottom: 10,
  },
  button: {
    height: 20,
  },
  resultado: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
  },
  jsonData: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
});

export default App;