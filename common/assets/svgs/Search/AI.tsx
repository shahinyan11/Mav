import React, { FC } from 'react'
import Svg, { Defs, LinearGradient, Mask, Path, Stop } from 'react-native-svg'

interface Props {
  width?: string | number,
  height?: string | number,
}

const AI: FC<Props> = ({ width, height }) =>{
  return (
    <Svg
      width={width || 13}
      height={height || 12}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask id="a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.502 2.4h1.6v7.2h-1.6V2.4zM1.9 9.58l2.393-7.092h1.564L3.465 9.58H1.9zm6.758 0l-1.957-6.7-.8 2.2.53 2H5.1l-.4 1.2h2.05l.344 1.3h1.564z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.502 2.4h1.6v7.2h-1.6V2.4zM1.9 9.58l2.393-7.092h1.564L3.465 9.58H1.9zm6.758 0l-1.957-6.7-.8 2.2.53 2H5.1l-.4 1.2h2.05l.344 1.3h1.564z"
        fill="url(#paint0_linear_1308_18333)"
      />
      <Path
        d="M11.102 2.4h.1v-.1h-.1v.1zm-1.6 0v-.1h-.1v.1h.1zm1.6 7.2v.1h.1v-.1h-.1zm-1.6 0h-.1v.1h.1v-.1zM4.293 2.488v-.1h-.072l-.023.068.095.032zM1.9 9.58l-.094-.031-.045.131h.14v-.1zm3.957-7.092l.095.032.045-.132h-.14v.1zM3.465 9.58v.1h.071l.023-.068-.094-.032zM6.7 2.88l.096-.027-.085-.293-.105.287.094.034zm1.957 6.7v.1h.134l-.038-.128-.096.028zm-2.757-4.5l-.094-.033-.01.03.008.03.096-.026zm.53 2v.1h.13l-.033-.125-.097.026zm-1.331 0v-.1h-.072l-.023.07.095.03zm-.4 1.2l-.095-.03-.044.13H4.7v-.1zm2.05 0l.096-.025-.02-.074H6.75v.1zm.344 1.3l-.097.026.02.074h.077v-.1zm4.008-7.28h-1.6v.2h1.6v-.2zm.1 7.3V2.4h-.2v7.2h.2zm-1.7.1h1.6v-.2h-1.6v.2zm-.1-7.3v7.2h.2V2.4h-.2zm-5.204.056L1.806 9.549l.19.063L4.387 2.52l-.19-.064zm1.66-.068H4.292v.2h1.564v-.2zM3.558 9.612L5.952 2.52l-.19-.064L3.37 9.549l.19.063zM1.9 9.68h1.565v-.2H1.9v.2zM6.605 2.91l1.957 6.7.192-.057-1.957-6.7-.192.057zm-.61 2.206l.8-2.2-.188-.068-.8 2.2.188.068zm.533 1.94l-.53-2-.193.051.53 2 .193-.05zM5.1 7.181H6.43v-.2H5.1v.2zm-.306 1.131l.4-1.2-.19-.063-.4 1.2.19.063zm1.955-.131H4.7v.2h2.05v-.2zm.442 1.374l-.345-1.3-.193.051.344 1.3.194-.051zm1.467-.075H7.094v.2h1.564v-.2z"
        fill="url(#paint1_linear_1308_18333)"
        mask="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1308_18333"
          x1={3.60399}
          y1={3.78477}
          x2={9.39321}
          y2={10.2167}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FADD94" />
          <Stop offset={1} stopColor="#CE9E21" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1308_18333"
          x1={4.24998}
          y1={3.5079}
          x2={8.90156}
          y2={8.93426}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEFC4" />
          <Stop offset={1} stopColor="#B98F23" stopOpacity={0.76} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export { AI }
