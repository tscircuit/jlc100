import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["GND1"],
  pin4: ["VDD"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["GND2"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["GND3"]
} as const

export const EFM8BB10F8G_A_QFN20R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C406735"
  ]
}}
      manufacturerPartNumber="EFM8BB10F8G_A_QFN20R"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.2515849999998636mm" pcbY="-1.3768069999999852mm" width="0.3400044mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.7514589999998407mm" pcbY="-1.4499590000000353mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.25158699999985856mm" pcbY="-1.4499590000000353mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.2485390000000507mm" pcbY="-1.4499590000000353mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.7484110000000328mm" pcbY="-1.4499590000000353mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.2485370000000557mm" pcbY="-1.3768069999999852mm" width="0.3400044mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.451483000000053mm" pcbY="-0.7501889999998639mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.451483000000053mm" pcbY="-0.2500630000000683mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.451483000000053mm" pcbY="0.2500630000000683mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.451483000000053mm" pcbY="0.7499350000000504mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="1.2485370000000557mm" pcbY="1.376807000000099mm" width="0.3400044mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.7484110000000328mm" pcbY="1.4499589999999216mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.2485390000000507mm" pcbY="1.4499589999999216mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.25158699999985856mm" pcbY="1.4499589999999216mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-0.7514589999998407mm" pcbY="1.4499589999999216mm" width="0.25001219999999996mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-1.2515849999998636mm" pcbY="1.376807000000099mm" width="0.3400044mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-1.4514829999999392mm" pcbY="0.7499350000000504mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.4514829999999392mm" pcbY="0.2500630000000683mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-1.4514829999999392mm" pcbY="-0.2500630000000683mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-1.4514829999999392mm" pcbY="-0.7501889999998639mm" width="0.6999986mm" height="0.25001219999999996mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.0013969999998835192mm" pcbY="-0.0001269999999067295mm" width="1.6999966mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":1.8986500000000888,"y":1.8999453999999787},{"x":1.2492482000001246,"y":1.8999453999999787}]} />
<silkscreenpath route={[{"x":-1.9014439999998558,"y":-1.9001994000000195},{"x":-1.2520421999998916,"y":-1.9001994000000195}]} />
<silkscreenpath route={[{"x":-1.9014439999998558,"y":-1.9001994000000195},{"x":-1.9014439999998558,"y":-1.2508229999998548}]} />
<silkscreenpath route={[{"x":1.8986500000000888,"y":1.8999453999999787},{"x":1.8986500000000888,"y":1.2505690000000413}]} />
<silkscreenpath route={[{"x":-1.7415255999999317,"y":1.8999453999999787},{"x":-1.0921237999999676,"y":1.8999453999999787}]} />
<silkscreenpath route={[{"x":1.738731600000051,"y":-1.9001994000000195},{"x":1.738731600000051,"y":-1.2507976000000554}]} />
<silkscreenpath route={[{"x":1.738731600000051,"y":-1.9001994000000195},{"x":1.0893297999999731,"y":-1.9001994000000195}]} />
<silkscreenpath route={[{"x":-1.7415255999999317,"y":1.8999453999999787},{"x":-1.7415255999999317,"y":1.2505436000001282}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0fcb41ad7e264837978f4acc1683eb46&pn=C406735",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -0.0015240000000176224, y: -0.00005080000005364127, z: 2.30999698 },
      }}
      {...props}
    />
  )
}