import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NRST"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["VSS"],
  pin5: ["VCAP"],
  pin6: ["VDD"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["UART1_RXPF4"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["PB7"],
  pin15: ["PB6"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["pin23"],
  pin24: ["pin24"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"]
} as const

export const STM8S903K3T6CTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C8257"
  ]
}}
      manufacturerPartNumber="STM8S903K3T6CTR"
      footprint={<footprint>
        <smtpad portHints={["pin32"]} pcbX="-2.7989657000000108mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.9988657000000103mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-1.198765700000024mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-0.39866570000000934mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="0.39889429999999493mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="1.1989943000000096mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="1.9990942999999675mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="2.799194299999982mm" pcbY="4.175760000000011mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.175874300000004mm" pcbY="2.7990800000000036mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.175874300000004mm" pcbY="1.99999600000001mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.175874300000004mm" pcbY="1.1999976000000032mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="4.175874300000004mm" pcbY="0.39999919999999634mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.175874300000004mm" pcbY="-0.3999991999999821mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.175874300000004mm" pcbY="-1.1999976000000032mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="4.175874300000004mm" pcbY="-1.9999959999999959mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="4.175874300000004mm" pcbY="-2.7990799999999894mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="2.799194299999982mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="2.0001102999999887mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.2001118999999676mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.4001134999999749mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.39988490000001775mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-1.1998833000000104mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.999881700000003mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-2.7989657000000108mm" pcbY="-4.175759999999997mm" width="0.48000919999999997mm" height="1.6500093999999998mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-4.175874300000004mm" pcbY="-2.7990799999999894mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.175645700000004mm" pcbY="-1.9999959999999959mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.175645700000004mm" pcbY="-1.1999976000000032mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-4.175645700000004mm" pcbY="-0.3999991999999821mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.175645700000004mm" pcbY="0.39999919999999634mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.175645700000004mm" pcbY="1.1999976000000032mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-4.175645700000004mm" pcbY="1.99999600000001mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-4.175645700000004mm" pcbY="2.7990800000000036mm" width="1.6500093999999998mm" height="0.48000919999999997mm" shape="rect" />
<silkscreenpath route={[{"x":2.95014649999996,"y":2.949930600000002},{"x":-2.9497655000000265,"y":2.949930600000002},{"x":-2.9497655000000265,"y":-2.9499813999999986},{"x":2.95014649999996,"y":-2.9499813999999986},{"x":2.95014649999996,"y":2.949930600000002}]} />
<silkscreenpath route={[{"x":-2.100389500000034,"y":2.275814600000004},{"x":-1.9607580755021559,"y":2.4639509503048345},{"x":-1.7383048737743252,"y":2.3904200448680513},{"x":-1.7383048737743252,"y":2.156129155131964},{"x":-1.9607580755021559,"y":2.082598249695195},{"x":-2.100389500000034,"y":2.2707346000000257}]} />
<silkscreenpath route={[{"x":-4.150169500000018,"y":3.5991546000000056},{"x":-3.999527470296087,"y":3.747895655997681},{"x":-3.850150075985269,"y":3.5978846000000146},{"x":-3.999527470296087,"y":3.44787354400232},{"x":-4.150169500000018,"y":3.5966146000000094}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=28eea09222224639a3999749955a1ff3&pn=C8257",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: 0.00011429999997858431, y: 0, z: 5.8007646999999976 },
      }}
      {...props}
    />
  )
}