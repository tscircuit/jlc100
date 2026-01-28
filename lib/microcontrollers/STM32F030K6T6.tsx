import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["NRST"],
  pin5: ["VDDA"],
  pin6: ["PA0"],
  pin7: ["PA1"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB0"],
  pin15: ["PB1"],
  pin16: ["VSS1"],
  pin17: ["VDD2"],
  pin18: ["PA8"],
  pin19: ["PA9"],
  pin20: ["PA10"],
  pin21: ["PA11"],
  pin22: ["PA12"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["PA15"],
  pin26: ["PB3"],
  pin27: ["PB4"],
  pin28: ["PB5"],
  pin29: ["PB6"],
  pin30: ["PB7"],
  pin31: ["BOOT0"],
  pin32: ["VSS2"]
} as const

export const STM32F030K6T6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C46830"
  ]
}}
      manufacturerPartNumber="STM32F030K6T6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.8000959999999964mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.9999959999999959mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1998959999999954mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.40004999999999313mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.40004999999999313mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.1998960000000096mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.99999600000001mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.8000960000000106mm" pcbY="-4.368800000000007mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.381500000000003mm" pcbY="-2.800096000000025mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.381500000000003mm" pcbY="-1.99999600000001mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="4.381500000000003mm" pcbY="-1.1998960000000096mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="4.381500000000003mm" pcbY="-0.40005000000000734mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.381500000000003mm" pcbY="0.40004999999999313mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.381500000000003mm" pcbY="1.1998960000000096mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.381500000000003mm" pcbY="1.9999959999999817mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.381500000000003mm" pcbY="2.800095999999982mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.8000960000000106mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.99999600000001mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.1998960000000096mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.40004999999999313mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.40004999999999313mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.1998959999999954mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.9999959999999959mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-2.8000959999999964mm" pcbY="4.368799999999993mm" width="0.45001179999999996mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-4.381499999999988mm" pcbY="2.800095999999982mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-4.381499999999988mm" pcbY="1.9999959999999817mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-4.381499999999988mm" pcbY="1.1998960000000096mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.381499999999988mm" pcbY="0.40004999999999313mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-4.381499999999988mm" pcbY="-0.40005000000000734mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-4.381499999999988mm" pcbY="-1.1998960000000096mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-4.381499999999988mm" pcbY="-1.99999600000001mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-4.381499999999988mm" pcbY="-2.800096000000025mm" width="1.6500093999999998mm" height="0.45001179999999996mm" shape="rect" />
<silkscreenpath route={[{"x":-2.9626559999999955,"y":2.949955999999986},{"x":-2.9626559999999955,"y":-2.9499560000000145},{"x":2.937256000000019,"y":-2.9499560000000145},{"x":2.937256000000019,"y":2.949955999999986},{"x":-2.9626559999999955,"y":2.949955999999986}]} />
<silkscreenpath route={[{"x":-2.8206699999999927,"y":-5.514187600000014},{"x":-2.9694110559976536,"y":-5.363545570296068},{"x":-2.8193999999999875,"y":-5.2141681759852645},{"x":-2.6693889440023213,"y":-5.363545570296083},{"x":-2.8181299999999823,"y":-5.514187600000014}]} />
<silkscreenpath route={[{"x":-2.2123399999999833,"y":-1.998980000000003},{"x":-2.4015150142161303,"y":-1.8600625508058783},{"x":-2.3284212288967012,"y":-1.6370321891015607},{"x":-2.0937187711032834,"y":-1.6370321891015607},{"x":-2.0206249857838543,"y":-1.8600625508058783},{"x":-2.209799999999987,"y":-1.998980000000003}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4d9f6c3430024506b87ce44b53201fc5&pn=C46830",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0.01818640000000471, y: 0.000025399999998398926, z: 5.308294983392 },
      }}
      {...props}
    />
  )
}