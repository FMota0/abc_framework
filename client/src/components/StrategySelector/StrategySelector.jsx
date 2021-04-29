import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StrategyTypes } from "../../types";
import { getSelectedStrategy } from "../../store/selectedStrategy/selectors";
import { setStrategy } from "../../store/selectedStrategy/slice";

import {
  svgStyle,
  quarterStyle,
  sliceStyle,
  sliceStyleHover,
  sliceStyleSelected,
  borderStyle,
  textStyle,
  axisStyle,
  legendsStyle,
  quadStyle,
} from "./styles";
import { getNumberOfResearchesByStrategy } from "../../store/programs/selectors";
import Tooltip from "./Tooltip";

function MethodSelector() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selected = useSelector(getSelectedStrategy);
  const numberOfResearches = useSelector(getNumberOfResearchesByStrategy(id))

  const setSelected = useCallback(
    (strategy) => {
      dispatch(setStrategy(selected === strategy ? null : strategy));
    },
    [dispatch, selected],
  );

  const [hovering, setHovering] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0});

  const getSliceStyle = (strategy) => {
    return {
      ...sliceStyle,
      ...(selected === strategy ? sliceStyleSelected : {}),
      ...(hovering === strategy ? sliceStyleHover : {}),
    }
  };

  const handleMouseOver = (strategy) => {
    return (e) => {
      setTooltipPos({
        x: e.nativeEvent.layerX,
        y: e.nativeEvent.layerY,
      });
      setHovering(strategy);
    }
  };

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2048 2048"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={svgStyle}
      >
        <g id="graphic" transform="matrix(0.830078,0,0,0.830078,333.5,70)">
            <g transform="matrix(1.36754e-16,-2.23337,1.25644,7.69349e-17,879.509,2164.14)">
                <path d="M510.5,115L969,930L52,930L510.5,115Z" style={quarterStyle}/>
            </g>
            <g transform="matrix(-2.23337,-2.73509e-16,1.5387e-16,-1.25644,2164.14,1168.49)">
                <path d="M510.5,115L969,930L52,930L510.5,115Z" style={quarterStyle}/>
            </g>
            <g transform="matrix(-4.10263e-16,2.23337,-1.25644,-2.30805e-16,1168.49,-116.135)">
                <path d="M510.5,115L969,930L52,930L510.5,115Z" style={quarterStyle}/>
            </g>
            <g transform="matrix(2.23337,0,0,1.25644,-116.135,879.509)">
                <path d="M510.5,115L969,930L52,930L510.5,115Z" style={quarterStyle}/>
            </g>
            <g
              id="base" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.FieldExperiments)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.FieldExperiments);
              }}
            >
                <path
                  d="M813,524.5C813,438.437 777.653,355.899 714.734,295.044L477.5,524.5L813,524.5Z"
                  style={
                    getSliceStyle(StrategyTypes.FieldExperiments)
                  }
                />
                <clipPath id="_clip1">
                    <path d="M813,524.5C813,438.437 777.653,355.899 714.734,295.044L477.5,524.5L813,524.5Z"/>
                </clipPath>
                <g clipPath="url(#_clip1)">
                    <g transform="matrix(1.1548,0,0,1.11693,220.329,160.918)">
                        <g id="label">
                            {
                              hovering === StrategyTypes.FieldExperiments ? 
                              (
                                <>
                                  <text x="337px" y="254.61px" style={textStyle}>Experimentos de</text>
                                  <text x="337px" y="274.231px" style={textStyle}>campo - ({numberOfResearches.FieldExperiments})</text>
                                </>
                              )
                              : 
                              (
                                <>
                                  <text x="337px" y="264.61px" style={textStyle}>Exp. de campo</text>
                                </>
                              )
                            }
                        </g>
                    </g>
                </g>
                <path d="M813,524.5C813,438.437 777.653,355.899 714.734,295.044L477.5,524.5L813,524.5Z" style={borderStyle}/>
            </g>
            <g 
              id="base1" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.ExperimentalSimulations)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.ExperimentalSimulations);
              }}
            >
                <path
                  d="M714.734,295.044C651.816,234.188 566.48,200 477.5,200L477.5,524.5L714.734,295.044Z"
                  style={
                    getSliceStyle(StrategyTypes.ExperimentalSimulations)
                  }
                />
                <clipPath id="_clip2">
                    <path d="M714.734,295.044C651.816,234.188 566.48,200 477.5,200L477.5,524.5L714.734,295.044Z"/>
                </clipPath>
                <g clipPath="url(#_clip2)">
                    <g transform="matrix(1.1548,0,0,1.11693,70.4633,-587.581)">
                        <g id="label1">
                          {
                            hovering === StrategyTypes.ExperimentalSimulations ?
                            (
                              <>
                                <text x="364px" y="773.097px" style={textStyle}>Simulações</text>
                                <text x="364px" y="792.719px" style={textStyle}>Experimentais - ({numberOfResearches.ExperimentalSimulations})</text>
                              </>
                            )
                            :
                            (
                              <text x="384px" y="783.097px" style={textStyle}>Simu. Exp.</text>  
                            )
                          }
                        </g>
                    </g>
                </g>
                <path d="M714.734,295.044C651.816,234.188 566.48,200 477.5,200L477.5,524.5L714.734,295.044Z" style={borderStyle}/>
            </g>
            <g
              id="base2" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.LaboratoryExperiments)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.LaboratoryExperiments);
              }}
            >
                <path
                  d="M477.5,200C388.52,200 303.184,234.188 240.266,295.044L477.5,524.5L477.5,200Z"
                  style={
                    getSliceStyle(StrategyTypes.LaboratoryExperiments)
                  }
                />
                <clipPath id="_clip3">
                    <path d="M477.5,200C388.52,200 303.184,234.188 240.266,295.044L477.5,524.5L477.5,200Z"/>
                </clipPath>
                <g clipPath="url(#_clip3)">
                    <g transform="matrix(1.1548,0,0,1.11693,-94.1515,2.94615)">
                        <g id="label2">
                          {
                            hovering === StrategyTypes.LaboratoryExperiments ?
                            (
                              <>
                                <text x="337px" y="254.61px" style={textStyle}>Experimentos de</text>
                                <text x="337px" y="274.231px" style={textStyle}>laboratório - ({numberOfResearches.LaboratoryExperiments})</text>
                              </>
                            )
                            :
                            (
                              <text x="337px" y="264.61px" style={textStyle}>Exp. de lab</text>
                            )
                          }
                        </g>
                    </g>
                </g>
                <path d="M477.5,200C388.52,200 303.184,234.188 240.266,295.044L477.5,524.5L477.5,200Z" style={borderStyle}/>
            </g>
            <g
              id="judgment-studies" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.JudgmentStudies)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.JudgmentStudies);
              }}
            >
                <path
                  d="M240.266,295.044C177.347,355.899 142,438.437 142,524.5L477.5,524.5L240.266,295.044Z"
                  style={
                    getSliceStyle(StrategyTypes.JudgmentStudies)
                  }
                />
                <clipPath id="_clip4">
                    <path d="M240.266,295.044C177.347,355.899 142,438.437 142,524.5L477.5,524.5L240.266,295.044Z"/>
                </clipPath>
                <g clipPath="url(#_clip4)">
                    <g transform="matrix(1.1548,0,0,1.11693,-238.676,-414.206)">
                        <g id="label3">
                          {
                            hovering === StrategyTypes.JudgmentStudies ?
                            (
                              <>
                                <text x="364px" y="773.097px" style={textStyle}>Estudos de</text>
                                <text x="364px" y="792.719px" style={textStyle}>julgamento - ({numberOfResearches.JudgmentStudies})</text>
                              </>
                            )
                            :
                            (
                              <text x="374px" y="783.097px" style={textStyle}>Est. de julg.</text>
                            )
                          }
                        </g>
                    </g>
                </g>
                <path d="M240.266,295.044C177.347,355.899 142,438.437 142,524.5L477.5,524.5L240.266,295.044Z" style={borderStyle}/>
            </g>
            <g
              id="base3" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.SampleStudies)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.SampleStudies);
              }}
            >
                <path
                  d="M142,524.5C142,610.563 177.347,693.101 240.266,753.956L477.5,524.5L142,524.5Z"
                  style={
                    getSliceStyle(StrategyTypes.SampleStudies)
                  }
                />
                <clipPath id="_clip5">
                    <path d="M142,524.5C142,610.563 177.347,693.101 240.266,753.956L477.5,524.5L142,524.5Z"/>
                </clipPath>
                <g clipPath="url(#_clip5)">
                    <g transform="matrix(1.1548,0,0,1.11693,-237.717,-295.531)">
                        <g id="label4">
                          {
                            hovering === StrategyTypes.SampleStudies ?
                            (
                              <>
                                <text x="364px" y="773.097px" style={textStyle}>Estudos de</text>
                                <text x="364px" y="792.719px" style={textStyle}>amostra - ({numberOfResearches.SampleStudies})</text>
                              </>
                            )
                            :
                            (
                              <text x="364px" y="793.097px" style={textStyle}>Est. de amostra</text>
                            )
                          }
                        </g>
                    </g>
                </g>
                <path d="M142,524.5C142,610.563 177.347,693.101 240.266,753.956L477.5,524.5L142,524.5Z" style={borderStyle}/>
            </g>
            <g
              id="formal-theory" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.FormalTheory)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.FormalTheory);
              }}
            >
                <path
                  d="M240.266,753.956C303.184,814.812 388.52,849 477.5,849L477.5,524.5L240.266,753.956Z"
                  style={
                    getSliceStyle(StrategyTypes.FormalTheory)
                  }
                />
                <clipPath id="_clip6">
                    <path d="M240.266,753.956C303.184,814.812 388.52,849 477.5,849L477.5,524.5L240.266,753.956Z"/>
                </clipPath>
                <g clipPath="url(#_clip6)">
                    <g transform="matrix(1.1548,0,0,1.11693,-140.066,-114.965)">
                      {
                        hovering === StrategyTypes.FormalTheory ?
                        (
                          <text id="label5" x="364px" y="773.097px" style={textStyle}>T<tspan x="373.5px 384.067px " y="773.097px 773.097px ">eo</tspan>ria Formal - ({numberOfResearches.FormalTheory})</text>
                        )
                        :
                        (
                          <text id="label5" x="394px" y="763.097px" style={textStyle}>Teo. Formal</text>
                        )
                      }
                    </g>
                </g>
                <path d="M240.266,753.956C303.184,814.812 388.52,849 477.5,849L477.5,524.5L240.266,753.956Z" style={borderStyle}/>
            </g>
            <g
              id="base4" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.ComputerSimulations)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.ComputerSimulations);
              }}
            >
                <path
                  d="M477.5,849C568.511,849 655.617,813.238 718.839,749.917L477.5,524.5L477.5,849Z"
                  style={
                    getSliceStyle(StrategyTypes.ComputerSimulations)
                  }
                />
                <clipPath id="_clip7">
                    <path d="M477.5,849C568.511,849 655.617,813.238 718.839,749.917L477.5,524.5L477.5,849Z"/>
                </clipPath>
                <g clipPath="url(#_clip7)">
                    <g transform="matrix(1.1548,0,0,1.11693,101.643,432.855)">
                        <g id="label6" >
                          {
                            hovering === StrategyTypes.ComputerSimulations ?
                            (
                              <>
                                <text x="337px" y="254.61px" style={textStyle}>Simulação de</text>
                                <text x="337px" y="274.231px" style={textStyle}>computador - ({numberOfResearches.ComputerSimulations})</text>
                              </>
                            )
                            :
                            (
                              <text x="337px" y="274.61px" style={textStyle}>Simu. de comput.</text>
                            )
                          }
                        </g>
                    </g>
                </g>
                <path d="M477.5,849C568.511,849 655.617,813.238 718.839,749.917L477.5,524.5L477.5,849Z" style={borderStyle}/>
            </g>
            <g
              id="base5" transform="matrix(2.08644,0,0,2.15716,27.7258,-107.433)"
              onMouseOver={handleMouseOver(StrategyTypes.FieldStudy)}
              onMouseLeave={() => setHovering(null)}
              onClick={() => {
                setSelected(StrategyTypes.FieldStudy);
              }}
            >
                <path
                  d="M714.734,753.956C777.653,693.101 813,610.563 813,524.5L477.5,524.5L714.734,753.956Z"
                  style={
                    getSliceStyle(StrategyTypes.FieldStudy)
                  }
                />
                <clipPath id="_clip8">
                    <path d="M714.734,753.956C777.653,693.101 813,610.563 813,524.5L477.5,524.5L714.734,753.956Z"/>
                </clipPath>
                <g clipPath="url(#_clip8)">
                    <g transform="matrix(1.1548,0,0,1.11693,168.163,281.279)">
                      {
                        hovering === StrategyTypes.FieldStudy ?
                        (
                          <text id="label7" x="337px" y="254.61px" style={textStyle}>Estudo de campo - ({numberOfResearches.FieldStudy})</text>  
                        )
                        :
                        (
                          <text id="label7" x="387px" y="274.61px" style={textStyle}>Est. de campo</text>
                        )
                      }
                    </g>
                </g>
                <path d="M714.734,753.956C777.653,693.101 813,610.563 813,524.5L477.5,524.5L714.734,753.956Z" style={borderStyle}/>
            </g>
            <g transform="matrix(1.20471,0,0,2.24209,-209.619,-2268.29)">
                <path d="M207.5,1969.3L207.5,1981L174,1963L207.5,1945L207.5,1956.7L1840.5,1956.7L1840.5,1945L1874,1963L1840.5,1981L1840.5,1969.3L207.5,1969.3Z" style={axisStyle}/>
            </g>
            <g transform="matrix(-0.00102212,-1.20471,2.24209,-0.00190229,-4486.92,2261.35)">
                <path d="M207.5,1969.3L207.5,1981L174,1963L207.5,1945L207.5,1956.7L1840.5,1956.7L1840.5,1945L1874,1963L1840.5,1981L1840.5,1969.3L207.5,1969.3Z" style={axisStyle}/>
            </g>
            <g transform="matrix(1.20471,0,0,1.20471,-581.873,-10.8424)">
                <text x="1807px" y="1875.22px" style={legendsStyle}>Contexto e sistemas</text>
                <text x="1807px" y="1914.46px" style={legendsStyle}>mais especíﬁcos</text>
            </g>
            <g transform="matrix(1.20471,0,0,1.20471,-2176.9,-10.8424)">
                <text x="1807px" y="1875.22px" style={legendsStyle}>Contexto e sistemas</text>
                <text x="1807px" y="1914.46px" style={legendsStyle}>mais genéricos</text>
            </g>
            <g transform="matrix(1.20471,0,0,1.20471,-419.238,-5.47837e-13)">
                <text x="85.484px" y="48.22px" style={legendsStyle}>Pesquisa</text>
                <text x="161.577px" y="87.463px" style={legendsStyle}>mais</text>
                <text x="100.309px" y="126.706px" style={legendsStyle}>intrusiva</text>
            </g>
            <g transform="matrix(1.20471,0,0,1.20471,-419.238,1856.45)">
                <text x="85.484px" y="48.22px" style={legendsStyle}>Pesquisa</text>
                <text x="127.752px" y="87.463px" style={legendsStyle}>menos</text>
                <text x="100.309px" y="126.706px" style={legendsStyle}>intrusiva</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,-67.125,-3)">
            <text x="1157.43px" y="133.652px" style={quadStyle}><tspan x="1157.43px " y="133.652px ">Q</tspan>uadrante 2</text>
            <text x="905.938px" y="186.961px" style={quadStyle}>Conﬁgurações de pesquisa planejadas</text>
        </g>
        <g transform="matrix(-0.000464984,-1,1,-0.000464984,266.457,2170.7)">
            <text x="1157.43px" y="133.652px" style={quadStyle}><tspan x="1157.43px " y="133.652px ">Q</tspan>uadrante 3</text>
            <text x="935.977px" y="186.961px" style={quadStyle}>Conﬁgurações neutras de pesquisa</text>
        </g>
        <g transform="matrix(1,0,0,1,-105.625,1523.63)">
            <text x="1195.93px" y="133.652px" style={quadStyle}><tspan x="1195.93px " y="133.652px ">Q</tspan>uadrante 4</text>
            <text x="915.57px" y="186.961px" style={quadStyle}>Conﬁgurações não empíricas de pesquisa</text>
        </g>
        <g transform="matrix(6.19745e-17,1,-1,6.245e-17,2112.9,-330.625)">
            <text x="1157.43px" y="133.652px" style={quadStyle}><tspan x="1157.43px " y="133.652px ">Q</tspan>uadrante 1</text>
            <text x="941.533px" y="186.961px" style={quadStyle}>Conﬁgurações de pesquisa natural</text>
        </g>
      </svg>
      {hovering && <Tooltip programId={id} strategy={hovering} position={tooltipPos} />}
    </>
  )
}

export default MethodSelector;