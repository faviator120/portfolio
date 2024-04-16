import React from "react";
import { Row, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Publications = () => {
  var data = {
    1: {
      title:
        "LINEAR STABILITY OF A CONTAMINATED FLUID FLOW DOWN A SLIPPERY INCLINED PLANE",
      citation: "F. A. Bhat, A. Samanta, Phys. Rev. E 98, 033108 (2018),",
      doi: "https://doi.org/10.1103/PhysRevE.98.033108",
      abstract:
        "The linear stability analysis of a fluid flow down a slippery inclined plane is carried out when the free surface of the fluid is contaminated by a monolayer of insoluble surfactant. The aim is to extend the earlier study [Samanta et al., J. Fluid Mech. 684, 353 (2011)] for low to high values of the Reynolds number in the presence of an insoluble surfactant. The Orr-Sommerfeld equation (OSE) is derived for infinitesimal disturbances of arbitrary wave numbers. At low Reynolds number, the OSE is solved analytically by using the long-wave analysis, which shows that the critical Reynolds number decreases in the presence of a slippery plane but increases in the presence of an insoluble surfactant. This fact ensures a destabilizing effect of wall slip and a stabilizing effect of insoluble surfactant on the long-wave surface mode. Further, the Chebyshev spectral collocation method is implemented to tackle the OSE equation numerically for an arbitrary value of the Reynolds number, or equivalently, for an arbitrary value of the wave number. At moderate Reynolds number, wall slip exhibits a stabilizing effect on the surface mode as opposed to the result in the long-wave regime, while the insoluble surfactant exhibits a stabilizing effect on the surface mode as in the result of the long-wave regime. On the other hand, at high Reynolds number, both wall slip and insoluble surfactant exhibit a stabilizing effect on the shear mode. Further, it is shown that both surface and shear modes compete with each other to dominate the primary instability once the inclination angle is sufficiently small. In addition, new phase boundaries are identified to differentiate the regimes of surface and shear modes.",
    },
    2: {
      title:
        "LINEAR STABILITY ANALYSIS OF A SURFACTANT-LADEN SHEAR-IMPOSED FALLING FILM",
      citation: "F. A. Bhat, A. Samanta, Phys. Fluids 31, 054103 (2019), ",
      doi: "https://doi.org/10.1063/1.5093745",
      abstract:
        "A study of the linear stability analysis of a shear-imposed fluid flowing down an inclined plane is performed when the free surface of the fluid is covered by an insoluble surfactant. The purpose is to extend the earlier work [H. H. Wei, “Effect of surfactant on the long-wave instability of a shear-imposed liquid flow down an inclined plane,” Phys. Fluids 17, 012103 (2005)] for disturbances of arbitrary wavenumbers. The Orr-Sommerfeld boundary value problem is formulated and solved numerically based on the Chebyshev spectral collocation method. Two temporal modes, the so-called surface mode and surfactant mode, are detected in the long-wave regime. The surfactant mode becomes unstable when the Péclet number exceeds its critical value. In fact, the instability of the surfactant mode occurs on account for the imposed shear stress. Energy budget analysis predicts that the kinetic energy of the infinitesimal disturbance grows with the imposed shear stress. On the other hand, the numerical results reveal that both surface and surfactant modes can be destabilized by increasing the value of the imposed shear stress. Similarly, it is demonstrated that the shear mode becomes more unstable in the presence of the imposed shear stress. However, it can be stabilized by incorporating the insoluble surfactant at the free surface. Apparently, it seems that inertia does not play any role in the surfactant mode in the moderate Reynolds number regime. Furthermore, the competition between surface and shear modes is discussed.",
    },
    3: {
      title:
        "LINEAR STABILITY FOR SURFACTANT-LADEN TWO-LAYER FILM FLOWS DOWN A SLIPPERY INCLINED PLANE",
      citation: "F.A. Bhat, A. Samanta, Chem. Eng. Sci. 220, 115611 (2020), ",
      doi: "https://doi.org/10.1016/j.ces.2020.115611",
      abstract:
        "Consider a two-layer film flows down a slippery inclined plane where both interface and free surface are contaminated by insoluble surfactants. A detailed linear stability analysis is performed in the presence of several flow parameters. Further, a coupled system of Orr-Sommerfeld equations is derived for the two-layer film flows with a free surface. The analytical calculation is accomplished based on the long-wave asymptotic expansion, while the numerical simulation is accomplished based on the Chebyshev spectral collocation method. Four modes, so-called surface mode, interface mode, surface surfactant mode and interface surfactant mode are identified in the long-wave regime. It is found that the surface surfactant mode is always stable, but the interface surfactant mode can be unstable if the Péclet number Pe2  corresponding to the interfacial surfactant exceeds its critical value and mr>1  , where m and r respectively stand for the viscosity ratio and the density ratio. Further, in the long-wave regime, the interface mode can be stabilized, but the surface mode can be destabilized by introducing the effect of wall slip when m<1. However, the effect of wall slip on the interface and surface modes is completely opposite as soon as m>1 . Furthermore, the viscosity ratio provides a dual role in the primary instability generated by the surface mode, i.e., it exhibits a stabilizing effect close to the criticality but exhibits a destabilizing effect far away from the criticality. However, the above results regarding the surface mode are fully converse if the density ratio, or, the thickness ratio varies rather than the viscosity ratio. Moreover, the interface surfactant mode can be stabilized by increasing the magnitude of density ratio, viscosity ratio and thickness ratio. In addition, the shear modes appear in the numerical simulation when the Reynolds number is very large and the inclination angle is very small. The shear mode associated with the lower fluid layer can be stabilized, but the shear mode associated with the upper fluid layer can be destabilized by increasing value of the viscosity ratio.",
    },
    4: {
      title:
        "LINEAR STABILITY OF A CONTAMINATED TWO-LAYER FILMS FLOWING DOWN A SLIPPERY INCLINED PLANE: PARAMETRIC STUDY AND PHYSICAL MECHANISM",
      citation: "F. A. Bhat, A. Samanta, Phys. Fluids 35, 084109 (2023), ",
      doi: "https://doi.org/10.1063/5.0161002",
      abstract:
        "A linear stability analysis of isothermal two-layer surfactant-laden films flowing down a slippery inclined plane is carried out, with a focus on the shear mode instabilities. The intention is to extend our previous study [Bhat and Samanta, “Linear stability for surfactant-laden two-layer film flows down a slippery inclined plane,” Chem. Eng. Sci. 220, 115611 (2020)] in the high Reynolds number regime. The stability analysis is performed under the umbrella of the Orr–Sommerfeld-type boundary value problem. The method of energy budget is employed to figure out the proper physical mechanisms responsible for the growth of the shear modes under the influence of various flow parameters. Numerical results reveal that the flow configuration under consideration is susceptible to two distinct shear modes in the high Reynolds number regime. The shear mode associated with the lower fluid layer is stabilized if the viscosity ratio, wall slip, and interfacial surfactant concentration are increased. However, increasing density ratio has a destabilizing impact on the lower-layer shear mode. On the other hand, the shear mode associated with the upper fluid layer is destabilized if the viscosity ratio and interfacial surfactant concentration are increased. However, the density ratio exhibits a non-monotonic impact, but the wall slip exhibits a stabilizing influence on the upper-layer shear mode. The energy budget analysis predicts that the primary energy source terms for the growth of the shear mode instabilities are base shear stresses, which transfer energy to the disturbance through the Reynolds stress term.",
    },
  };

  return (
    <Accordion style={{ backgroundColor: "transparent" }}>
      {Object.values(data).map((element) => {
        return (
          <Accordion.Item
            className="publications text-white"
            eventKey={element.doi}
            style={{ backgroundColor: "transparent" }}
          >
            <Accordion.Header className="publicationsHeader">
              <Container className="text-center">
                <Row>{element.title}</Row>
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
              <br />
              {element.abstract}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default Publications;
