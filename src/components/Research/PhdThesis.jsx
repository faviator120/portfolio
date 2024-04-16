import React from "react";
import { Row, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { MathJax } from "better-react-mathjax";
const PhdThesis = () => {
  var data = {
    1: {
        key:"1",
      title:
        "LINEAR STABILITY OF CONTAMINATED FLOWS",
      citation: "F. A. Bhat, Delhi,",
      doi: "http://hdl.handle.net/10603/425787",
      abstract: 'This is \\(Pe_2\\) \\(\\frac{10}{4x} \\approx 2^{12}\\)'},
  };

  return (
    <Accordion style={{ backgroundColor: "transparent" }}>
      {Object.values(data).map((element) => {
        return (
          <Accordion.Item
            className="publications text-white mt-10"
            eventKey={element.key}
            style={{ backgroundColor: "transparent" }}
          >
            <Accordion.Header className="publicationsHeader">
              <Container className="text-center">
                <Row>{element.title}
                </Row>
                <Row className="mt-4">
                  {" "}
                  <small>
                    {element.citation} &nbsp;&nbsp;
                    <a href={element.doi} target="_blank" rel="noreferrer">
                      {element.doi}
                    </a>
                  </small>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <b>Abstract</b>
              <MathJax>
                {"Falling films are widely encountered in nature, technical, and industrial set-ups, and the dynamics of waves generated on film surfaces play a major role in liquid-liquid extractor, multi-layer liquid coating, thin film heat exchangers, and chemical reactors. For this reason, it is not surprising that the studies of single or multi-layer falling films are of increasing interest. In this thesis, an attempt has been made to investigate the linear stability of single-layer and two-layer fluid flowing down an inclined plane when either fluid surface or both fluid surface and fluid-fluid interface are covered by insoluble surfactants."} 
                <br/> 
                <br/>
                {"First part of the thesis deals with the linear stability analysis of a fluid flowing down a slippery inclined plane when the free surface of the fluid is contaminated by a mono-layer of insoluble surfactant. The Orr-Sommerfeld equation (OSE) is derived for infinitesimal disturbances of arbitrary wave numbers. At low Reynolds number, the OSE is solved analytically by using the long-wave analysis, which shows that the critical Reynolds number decreases in the presence of a slippery plane but increases in the presence of an insoluble surfactant. This fact ensures a destabilizing effect of wall slip and a stabilizing effect of insoluble surfactant on the long-wave surface mode. Further, the Chebyshev spectral collocation method is implemented to tackle the OSE  numerically for an arbitrary value of the Reynolds number, or equivalently, for an arbitrary value of the wave number. At moderate Reynolds number, wall slip exhibits a stabilizing effect on the surface mode as opposed to the result in the long-wave regime, while the insoluble surfactant exhibits a stabilizing effect on the surface mode as in the result of the long-wave regime. On the other hand, at high Reynolds number, both wall slip and insoluble surfactant exhibit a stabilizing effect on the shear mode. Further, it is shown that both surface and shear modes compete with each other to dominate the primary instability once the inclination angle is sufficiently small. In addition, new phase boundaries are identified to differentiate the regimes of surface and shear modes."}
                <br/>
                <br/>
                
	The second part of the thesis deals with the study of linear stability analysis of a shear-imposed fluid flowing down an inclined plane when the free surface of the fluid is covered by an insoluble surfactant. The Orr-Sommerfeld boundary value problem is formulated and solved numerically based on the Chebyshev spectral collocation method. Two temporal modes, the so-called surface mode and surfactant mode, are detected in the long-wave regime. The surfactant mode becomes unstable when the Péclet number exceeds its critical value. In fact, the instability of the surfactant mode occurs on account for the imposed shear stress. Energy budget analysis predicts that the kinetic energy of the infinitesimal disturbance grows with the imposed shear stress. On the other hand, the numerical results reveal that both surface and surfactant modes can be destabilized by increasing the value of the imposed shear stress. Similarly, it is demonstrated that the shear mode becomes more unstable in the presence of imposed shear stress. However, it can be stabilized by incorporating the insoluble surfactant at the free surface. Apparently, it seems that inertia does not play any role in the surfactant mode in the moderate Reynolds number regime. Furthermore, the competition between surface and shear modes is discussed.
    <br/>
    <br/>
            {	"Finally, the third part of the thesis deals with a detailed study of linear stability analysis of a surfactant-laden two-layer film flowing down a slippery inclined plane in the presence of several flow parameters. Four modes, the so-called surface mode, interface mode, surface surfactant mode and interface surfactant mode, are identified in the long-wave regime. It is found that the surface surfactant mode is always stable, but the interface surfactant mode can be unstable if the Péclet number \\(Pe_2\\) corresponding to the interfacial surfactant exceeds its critical value and  \\(mr > 1\\), where  \\(m\\) and  \\(r\\) respectively stand for the viscosity ratio and the density ratio. Further, in the long-wave regime, the interface mode can be stabilized, but the surface mode can be destabilized by introducing the effect of wall slip when  \\(m < 1\\). However, the effect of wall slip on the interface and surface modes is completely opposite as soon as  \\(m > 1\\). Furthermore, the viscosity ratio provides a dual role in the primary instability generated by the surface mode, i.e., it exhibits a stabilizing 	effect close to the criticality but exhibits a destabilizing effect far away from the criticality. However, the above results regarding the surface mode are fully converse if the density ratio, or, the thickness ratio varies rather than the viscosity ratio. Moreover, the interface surfactant mode can be stabilized by increasing the magnitude of density ratio, viscosity ratio and thickness ratio. In addition, the shear modes appear in the numerical simulation when the Reynolds number is very large and the inclination angle is very small. The shear mode associated with the lower fluid layer can be stabilized, but the shear mode associated with the upper fluid layer can be destabilized by increasing value of the viscosity ratio."}
              </MathJax>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default PhdThesis;
