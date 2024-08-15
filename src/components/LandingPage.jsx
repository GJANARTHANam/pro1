import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <section className="hero">
          <h1>Welcome to Our Social Service</h1>
          <p>Empowering Communities, Transforming Lives</p>
        </section>

        <section className="intro section">
          <h2>About Us</h2>
          <p>
            We are dedicated to making the world a better place by providing
            support and services to those in need. Our mission is to empower
            individuals and communities to overcome challenges and achieve their
            fullest potential.
          </p>
        </section>

        <section className="aim section">
          <h2>Our Aim</h2>
          <p>
            Our aim is to provide comprehensive support services that foster
            sustainable development, promote social justice, and enhance the
            quality of life for all individuals, particularly the most
            vulnerable.
          </p>
        </section>

        <section className="photo-slideshow section">
          <h2>Photo Memories</h2>
          <Carousel showThumbs={false} infiniteLoop autoPlay centerMode centerSlidePercentage={80}>
            <div>
              <img src="https://wildlifesos.org/wp-content/uploads/2023/08/HSBC_Cleanup_Drive_blog_ftrd_img_lenu.jpg" alt="Memory 1" />
              <p className="legend">Community Outreach Program</p>
            </div>
            <div>
              <img src="https://www.who.int/images/default-source/searo---images/campaigns-and-events/world-immunization-week/wid-landing-page-23.jpeg?sfvrsn=464de3b9_2" alt="Memory 2" />
              <p className="legend">Health Awareness Campaign</p>
            </div>
            <div>
              <img src="https://hip2save.com/wp-content/uploads/2018/04/home-depot-kids-workshop.jpg?w=912&resize=912%2C684&strip=all" alt="Memory 3" />
              <p className="legend">Educational Workshop</p>
            </div>
            <div>
              <img src="https://www.ictacademy.in/pages/assets/base/img/content/backgrounds/4.jpg" alt="Memory 4" />
              <p className="legend">Youth Empowerment Event</p>
            </div>
            <div>
              <img src="https://thehill.com/wp-content/uploads/sites/2/2022/07/climate-protest_fl_092019ap-lynne-sladky_climate.jpg?strip=1" alt="Memory 5" />
              <p className="legend">Environmental Initiative</p>
            </div>
          </Carousel>
        </section>

        <section className="achievements section">
          <h2>Our Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement">
              <img src="ach1.jpg" alt="Achievement 1" />
              <p>Built 100 Homes for the Homeless</p>
            </div>
            <div className="achievement">
              <img src="/ach2.jpg" alt="Achievement 2" />
              <p>Educated Over 500 Children</p>
            </div>
            <div className="achievement">
              <img src="/ach3.jpg" alt="Achievement 3" />
              <p>Provided Medical Care to 1,000+ Patients</p>
            </div>
            <div className="achievement">
              <img src="https://st3.depositphotos.com/3591429/15026/i/450/depositphotos_150267710-stock-photo-hands-holding-sprouts.jpg" alt="Achievement 4" />
              <p>Planted 10,000 Trees</p>
            </div>
            <div className="achievement">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47idr3RkFzlzKcCwwgamln2-yC-jBihsjyQ&s" alt="Achievement 5" />
              <p>Organized 50+ Community Events</p>
            </div>
          </div>
        </section>

        <section className="partners section">
          <h2>Our Partners</h2>
          <div className="partner-grid">
            <div className="partner">
              <img src="/par1.jpg" alt="Partner 1" />
              <p>Amway</p>
            </div>
            <div className="partner">
              <img src="/par2.jpg" alt="Partner 2" />
              <p>Citi Bank</p>
            </div>
            <div className="partner">
              <img src="/par3.jpg" alt="Partner 3" />
              <p>Meta</p>
            </div>
            <div className="partner">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAABmFBMVEX//////v////0VSe39//////zrCBn/tQYBlhH///oVSev6///w/fEokS39//0VSe7sAAAAjgCuzK/kAADfAAAJRfDnAABNaMcAkgAANef9tgYAiAAzU+MAQO23xemVw5b5rgDpCRvRAADT2vSuyLAAM+sAN/AAL+IAegDsABD///XMAADYAAAAM/DyrgAAN+cAJeQALNQAMNDlgH8AfwAAKOwAPuZNZtO43Lvss7QAIsL9/N6Nn9ev0LDy0NT//+rw3JD05eazv+rc791cq2DU7tWKm+duguZhd+lJYeXu8/mNspBamF1qpWs5nD6Akuins+re5PV+toJufuR+kNwWQdtNnVM6U9AjRtDE1PTT3vIUO8lvgdk9Ws+5wdbt/+5whc/kRUvmYWTljI/668T20Ij5vkz2yGr536nknJnbNjbw1NPdfoPkJiXmc3TyxF09WOF+kM70tzLTS1DRNDfKEx6mttrx1IHIVFj34aLFNjoAMsTQiY1gd8XolpbpODfrzF/mur361tPlQEGlrO2LnMwiRL1UauOwUx48AAAY+UlEQVR4nO1djUMTx7bfmcyGNzvtbNpkY4NsSsgNuYmQBKhQHhQMrYj7XmtylSdQvLcoKohFRalae7VY7/XffufM7gaSLJECVm7ZU0UlJDv7m/PxOx+z1bRQQgkllFBCCSWUUEIJJZRQQgkllFBCCSWUUEIJJZRQQgkllFBCCSWUUEIJJZRQQgkllFBCCSWUUPYRxtiHXsIJFQK/Q2z2SIumUErf37WodK+Il3iPlzkGYQgEkUT7+i8N+fQvX2vyvSyb6pTrlDKKF9V0Lsn7uMqxCYEFAg4Xvzn7WUPOfsnek+ZQ2ApCCIPflPL3rKFHF0lARxQ0/+XJZx//Qy3/uK7AdGU9AIPIzsxemrvcM1ouj/Zcnrs0O5N1qIuP+wMnTqT20f/877cg33ngnP1So4DN8blkKnVNd2au9KQGU7ZlmSCRiGlZlp3KpYxLtbpE86IaOXEhEjZOun/7m6c7Xwhc4/GtUye6nJkr52zTtPoHK5VKeTSVq1RytmVEDAMR6llOS8rBB5003fF3SzbA+Q6D+bFg48Yj6szmc5YZsQd7rqId6cqExOLs5Xw/KJEBv61cfjnLlQGePGGMSO1bF5zPvlEc8BhcDtWYJNy5VgadMftHr9TlHreCCDm1+ZwZAf2xIqadu7HIdZ3RY9qY4xSpsW88cP6mHZMvhtCky1q5bETM8vwbh7e6XLBoPb3QD6YF5gVeKDdWhygvyYnTn11wPvn82MABixrLgdlE8lcgKgHra/a4REfKM5m3IiAm/GcNzToSlfiECYDzf8cHDjI8CfQyO2yD2tjzi534jDOWskzDAHRM+7qj6ycvpksivFD+yVfH8Xk6B5ZXy5uGhXcMzmTfnySczpbBLUciVvmMANbFTxo2oDnyY4/mHAM4aD86YgMmhdqgkQ7ZCGQUtYoJGpZblhw40YlTHACn+HGDAx5ZCJNUn6yAMgA2ROuoC5C9SG1m1DDLsyc2DSXyCw+ci8fgjxnTQW/Ai1gLYFMdcwMGQPLFITM/yemJc8WuQIz4qw/O0T8N6M1iXrG7oSVIC0jH/JIR6ixY+ZmifD+VgCML+AjhgfPF10f/OMnr30MEMo3y5Dvzbp1zvlyZT+vgl04c/XOFaR/5mnMM4BA2ZiN3MW/Id7pXiPrO3+scsCHkZGrOMYOjTZaR1EXyWf3deYjOMR4QyE9PXpxyhWn/8M3qo6N8DlazmFYfhmwJON0Y6MU7waF+sZR2iFZonUQTkHgdsJbCUCiScrceexSRxAfn7JHAwbDEtWUb/I0VKaexInrElXmfSqWEu5QgB3VMlEtEhtCjVkIIJRffDQ6DwPOOnBnchuRLwybmA+aCg3nEMQnTmJD4hR0obUdcitOrqxPT/Kg1tIOBc4B2llKVHzCjihj2DxrTj6o5wDHgqtXxkZVEIh6PJzI3b23gDnUAncM6i6u375R6XSndXZuGz9ifRCGHIErHW+sGKtGjOrn4RRA4uDalL7DA1y9HQG7tVPHjcHUBSOnA/50h9MaGOZTW2JHNikhRXb8Xj6EUCplotBBLZjY3pL4vOuBmJu6WertA8Es3/Nfb+2C1g+sBFsopWB8hRELMJKr8T0FhJIPvAzdtgNPskCmWEOCLvr6SxOUl4WtyZZ0IbCAEFX3hGv8qY/3TsIYd9LBH1GlWvZ+IFWLxHzdHRjZ/i8eiKLH4zer+75h40NvV3dt75/ba2u0HLkqA053VfQMn1+rZN5fm3j7saZb5+UcO1XRtF5yPm8ABDDnxFpiMJZMFWFqmEOtbJ+jr2q+GZnTDMlBxrOsCY8yhNYfBTgptvC8WjQ3cqgoB35LV9R+TmQzCM7COZZZm6BlnuuC3S73dvVtrRdg59DtrWwBVN+hP720uqGx2grDBul6fnc/127aFtf8IfInAn+AXLCy+wesMLhQMDrzC2HpfMhr78f74zvj6SgLggdXFHldFYEcOKN2wB87yYWFxBe5TkM14IQpq4mEAFsNHkmoB0fgmEbRZGYAqsWmlNreL3jtgD4tPER1Unl+LpGWvpKD1q7mUnaucr/Srxgj+tgfPgyykvR+G/f4yGBxdqz6ORwsD44oxaGID/gWryxS2qywoF9Ihw8a6MPCca0cDh4LGPgEzSqwz4V4INJUysZ5Q4GRizxCdprdwMbEFLqa0xryAD+AxXV4A00Ld6XpQZIQ3vYHO5m0rv5x2ivX0XN7ETY2YDxfr9foS+CH2DnDY1HYsE3tSFbokimdoL9XiMjFAR7TrDqXXIFbhJUZrRwMHsPk5Fs0kf2EN4gcOEG4X0EHJJDdbdRexAQ15DhbpvgPcIrhV7WkJHTP8urvbgGb4N2csZ9oP67Cl2IHNLtgR7IZY80uAC2lsPoBzthkchpFCiqm+QrTwBPRaElUGpkzeT7pe8TEJCo/sho0FYcMcTR8NHEkAm2jhGUGm2/TKpruAaOJWy+4Ut1BD7vLW5knxAWKDuF3wYhaunHBn3jasG46HgU7Fdfg3xpKhOpWNThFpBwfsmRKxAdhEB6aaF/2koNY2MC7a7gic4Asrgu0Ws/z3Q+OiPoluxkBDBzZEq6MQ1W13AbCwJtT43V40qglkV82eesJVna7u0qp3d8AxdOe6BTG1zn3rodxZsEwL2f0NIXU/FgeBIxkV5OcCGND9ppBN2TjqdSZa+Lmd/8J7/lvlnKA5hwdHbfw4mm/sF7Ak2ZyuwwIGMgqcwhNsIlN1A+BdniM2XU85bSVzkj3t7VZ+p+sBV2umWJ48Y1umPdngk3DDbhkKFz8JWPuawwLMShB2CxW4r5lTEFk95+5cYqqNxDA9OxTBMpd5BM1BaiXURTJ9U+0vAyl7oiJWJhpfV3klwQSXTZdQN3pXtbbGsmTKUaPulJ4LnLoBj6H9VIaQDQbk3wS4DpUWqvW/cLhsRDztqzazYgQWCAryrFmtOQO7UmQjfr9t4URbHEKHA+Fq9KdDgwO6wkaSGWBU5wJeBm+7nnQjVmGbKBKO98WeqtvfmmgfbAFjv+uB03WnCI4WnDFxvsfSwY3diKejC14aQsUxI+XJ3XtqB0cHj3QLw3ZyvZl4E6EwixaSP663xXLCPXBMpZmHo8dgIq7iRJObAS9jyDqHdAKVd1wongZxaWLLsxutbWQM2OFqyfPJpVXGCRgFnUTFgfzP74wA5piTnAGfHIlEgMIS774RnE9azArY5DbsTwaMx79HABl2aeMeYBNL3Jwioi1aER3Bcc12GT/2MP1LSAK1X1REiv0S9Dpj+jPPJWMwk0TH7O95Sd3808CPpMWtLk+eUkwyqVhA27cftY7eYSMEq5h5xy++AWJt4BA2NYBL6JvyghKONAmy/iReKMQGRqpYO2hiVOpddHEYbQrbl2eUQzuE8qAi/KzuHghg+8sQRtiOy3XQIWKGDthAuEbpvhCIjcae+uBsFQlm2ktDkChEEJzmmxAvsGtimqkGEwkCh2rKHUfP+eSdCT8LXBknWEQKqGBIPauyB+x8Lwj0B4co6IAn3Bjw2ELQ65AtV7c9cBI7TFPXmNhSOULX7YA3oAKvljxwShPop/RHo6oB/aj1Z+lV5GmGkfrJV6kAcMAeniHR8MDBntLGZhygSWxOCVVlCWxGQShHf4a6M+zATx2mLgzXG4+reDQwHqA5hKm1ueAkf9GEyg1XVfrd3XUh8AOpnPbtqvc5UDhGl3F2KmL/E7nx3vVrtVGMVkb5pz331woOePRtlWSeq2pqQGLncTyWjL9ad7QO0zvSJYEKnNEZnR6uoUA9lxMdCDIr0FlNW/dYcuExYgmh+7lXmwjSHAxX/K4PzgU1hzhmwx6awPZaq6hLQ+gWIvbeYPtpm+Z4dKbvNVYn1u8lwZ5uTgmhahX7ehKdjSmzwo9fxqB6CJ8DivHYY1IvA16GbWPa6wEPnG3FWgh/6oET5JCR7WsXfHCeqrG+MXQ5pjnkNNfjGK0PK4dcbgLnsxZwWPWc6/KmNHA1yVg88bIqVEWxUyFZp49sDxxzwdE6mBXVcVIJi4zuYDLSOV1iHg0m3Kc4eDR5K+CNOKWgEXfnMtFtd2Sa/+pVbR60BQnFuAlb853OA1Qc3EMDSEcq3RytqCbmlUfOZ/csvVVzGHvtghN/uTnwauXm5s6BCtUUWKDrcyLqwh00B0iqN60p1S/vugCa1NxLZ2JBPAd+FnbonhfMFThUgaP+25oOXBZhq3vBoXzZsrDSbS03hwxA5Hu1/CGH7KpUKziaC04mmrxfxXoo0w7CWHSNOvMqlqPqnMFv7CuUa7yebZMlDgs85+YHYDRB70MXuBlrBcetSpQmAt4iIb1oeOQHOFCmTY5aapxs2GleIoID/tg6I/agFgCO0u0CpA9MYvHjIEEZVfGM55EjRh4y/yCzUvO9lPP6cj6nZHDQ/+P89TpmAz44ECr3ubJXOAH4VOHE87fdkFsxiAMtXha5UAOcXyXSyCXF5CPm/KzePIwHZmUaRrmm73EJreBQ1+dk2hLPd6Gjp/OeWRnWcqB3wmhDuLZ0NY9zpjitHfF0zcj9IDh6+223Fgo0Ruzj/e/HXc154n2mS/K6IRjprI1BoOJP32lEK2yuigWVfxvWC6cZHXDIVsT63tH3TMS0aw5xwckkdn4POAwu66tOZHgpaHAJfobLxbFK2eh5+PDy27nl2YewVyjWP5FQgRFDtMq4+QPoXiCRvOWCU9jU3BFLP5R3/Vpkbe9An1D0wVllDBt9P6UMNQmCPHDvj2MoN4dmXGvdBxzgtj8XMm7+8jvAgWVASgeaAAHdMuyxQE8FF3WW6o4jqTtw27BEiJ9wXdj2X2IZP3dCrh7wIR44kH1JgjFutbfbY8DTkrW6OqR9PjilCaxy6Bq7ARqCbYahJfBiGmSdaO1UxzJv7hr8hex2ntt5joY+D9NvoIFUO1h3Dpm5qqdBHDBgW/IzAZG1BSiqCw8cM6VoKTLkhAsOUFChySDDAnAybjEQVgrgTPgupbSK2VKz6mCbwgfnTpGoSiB3CQ1S+TrHKgmOauJ3LbN8BmDidBfhNp8jtXEvu0u8ZDg9cxBw0CSoNllWFZ2IYRnf138POOUZ6g7qVvu83Cm+I1srga64Drlwr6rAoVrRZ8BddzF1aiYvwKiY55DB5UiMvhARfOdoLUAQwMMXYO7ijG2kLgnsfHbgOQBO1WWh2IYRlB504h/CJHgdJFIYDOwbrv/dv3u7B5yIomQU4ditSUBkaXHryszcUB67j9VH0CzOGk5na4LJVgZB3DqyUiwcdsA+JtPSFZWAm9ZQWudgzjrPXk+Z+WuwYqLtLba2goP9RI/EA9URuD0HAwdlMY99QzeJuKaRYofTQnvBcfkqw7zc19pCXxUYcws4oAdkpYDlrnOvhUr8pc4aobr0vK0vjrbqkcC7yoRUG4XT9LytOiVm7nIt6yzNjOVMMzXJ2yJAm88BorW7winRqqqdhGjLtukFLDNf41qHwkUAOBSXv93YGK3lOA16Z6ErDp18pqbCEC3mV7u6sRLafA2GDvk51gK7S6tMnT7B7AVMyQGmZakB+tT584ODlmHZQJnbjKQtlIN5NHoghSfkoCNVavlEXEf+6bKd/Eyn+aE2cNRIhybHvcZmFFurzQwfi25TfRgq+jZUCZmqKjt2rVy3ssaap3ZxYoJjFRmyTg33zn+Vct2pzc2PAgEtq/UakBDy9kHGNnB0uMX1mEfGYpva7zhlpGt8yc+wTMvM46jo7wCHYnfVqwVGM2DTbQPKTNyHWJ+J7a3wM82tE2ORfbpNdcREKegV5BGgP/V63VFrMOxr7md1BgcLrUzfLnghNbkpDq45hBN9puwZFvCdfG3/FCtIcwjsHVP9RAwHYNPNb4dbxbwvU7jX9H3CbvvzJndbdpIRN70Ao2rCmeOwJuqJ1OuqDgVpg9Z6uicAHMYgQWHjA24KUQDzbtOcfVUJSJhOH+UM061VGxAAtNZ5kQ7gUDUZxdbjeF1sHnKVDvjGhZTvfgxRey2aWVTxgY/OGrYcdt9BwR2D3pQutFAm6vaasSezmFKbCXxZygP4HIwbbk9WtUGSK1Us14KKY1xGpwlOKThE49Qs0a7l3WIyUB6rfL1e1GUQkQwAx4d+JO7PU4AbYA3CCt5vfKCQKQyMi1b98CIWDlqgZ/eNmXoTBrcDB0PwBySdKbte4EWdt9eg2sDxrvez73aihYF1ifk5lTrcJ8C782wH/2jHhyCL0Nm1nKmO4OFXa2hW8KDiDoLD9oDTcL5S0scxzO3QponQGwPuROz0ATaJddHiB3Vker1e5WINe/2e2TFVfS895YwEEn303+mUxwixcLqfQ26eCZQ4I+O5HXDLP65jRwbtg1XXX517rWajAsyFqZkOfWbIco+4RjBWzs8IPPa5W9HGGiCCwxU4quSPmiP9z2D645hr1bFnkEWAThFsaQFzL+DE0J6791CDN6nhJeVenhaVyeCv572IzXO4dmBRGz8Xkwlk9ZCIjjlUNQ9Ye9/q7EXFDJnrIggHdJLRhiQTrzZHXr4c2fwtEdveUKjsX07mtD4GOagau4UM2Oofnl1SE4iox6AYXEqOGQzP3sBEzMKi5W4YReLIbyXUoB1sy7hQIV6QqZtgbbF7GwLPdDV7ECwJ8AslhKK7u3fr9gSnvDhxYQty0t4HEx0CCofdXMbxCkxE7eEsxwKWX1AgRH7rP5Lg44tSqm+BRwMbZYJsJgq78BQKONiZLMRwaKczLdQBn9p8ylLwGHjAyM71zC46oCvqkRYUpzjF4pWHeQv701b/+crMbgauwpbYuRdzLx7/cWRnampn5DfsKSZe4iQVayHeHPv4mpi+29vr1pN7S1tbJfhHb++dVdGBihAcCa0PW/4+DtUonoprjIf5g12oO2e/++abb7+S7pNKcARkZztW8D2Pi1Bs4CURvDPzAbuC5dLaw5w7l2yo2GUNDo6+nX1TSy8upmfeXOnJ52zgQuVc+eGl2hK4pcaBANc/CDa+knTxibnztrH4q5dVVCLCWokp+kMck5xewyFkt/YFCN15Ps1EYKWfqLMF3qfURt0RYdCf3COpS82PAF//9bNPdp/08cknZz/nBM/44EgnKA/bWYnjHLDreXDYFn3PwbpSlGWXhyq261XUtKBllcspIKX9/WWckBmsjF59k3WCz/NhorXxciWRUMgkk4mVWxuSdcpH3FptcXrttpK16dZkoukngXPwoqwvwj5dGTU8Vh8xUz+Ax/N4Avv082b5qHkiVQ2R37r5KhEfSKyMjFd/z3QAhEmuZd/MRSqAhq0eZYGJsF3uz+Uqo5fn0M6UjQXqvWrZMKFVp3ZApqr4d5VJ7d/ycYseKoFVx0I6HPnSOVl6MzdaqQzCyvrdfoQbN/t/4P7huDZ6TpoSYaW/AicH8IJCEHbg4xmqkSIJUFHiLNZmr8w9nAfpuTx3ZbY2s+Q4qj2Dd0BI4LlgwoQEeKV0nyyBh0OEGhvvdMJGEQTm/bkvWQW9dx715FIYKnKj85fn5t7ON/JlKzXZiOhYkfCa/ngmjLUUKAhzj+i4No1zUYebvW5sYqft/CNEx0fjZK9W+kFHKj1X0sj8MMuazFuKepiYL3/IBX5IgVjkXM0Bgeifn0Vg1KOg0LCzC7biHfDrhfNB9+/DCaXpYTtiWRXg7eCTsfYFVEfqhDtjuYjKeow9k2+nRfB4Gid4zh+MB+heY2jUE07BtJCX4bytYqIn+7lixypIqgnW1tGtLOFJouZaPLB2fMwEFpeH6nuSiNMhwMGpOhJmpCYxg2kJDRAXizNlNaqdSjN60J7Un0PwfBk9A4zGshYcrf3WdbS7Rzjmb5b/hfT5FGGD4BSXhrF1ZD8Kyg0l+BldqFOqtgvOKfI5GhXatVEDEply4MkVpnK6SZxtOIXgQEb5bwvb5MOLgYUv7GZo2byBYyhuX+MUCaX1F5hE7QOOK/VhYDr5LDtV7hhDOY5KYwo11OFAGA4ZWC/wSWPaMT5O8sQLZTw7rJ5y2T+5f6+xPmQa9plOz/35Uwrm4i8s1SC/vn/yhOX2/BGPGv4nCijDvy01A5La/xTqP8Fl3zihDzt6j0KI1B7hbEUET6LhCFiLT8GTq/W8YUHedYq8jSdyd6bLmq8XJWsdRKY4BmFWagHNvVMgXK/l3WKoNZRuGSPHRFSMjZqpa/g4xw+1wg8lquPDxsqGqtmYuWWHctWdV2eD8Ok/S9dtbO7rp8/lYEWZcl0sD6pnShimXZlbxOcQ4y9ASaTfViwzX6N660P7T4N4z2OW1yrYA1E9vMHyw0tvajMzM7UrlyM5y8pdz3J1VuVDr/WPF6Ye/0X5Yk9OPalaDYJYdn9/fwrbaFZuvobOhh/n08T/wwTcMJ+5nCtjrxEnCNw+sJ0rz6W5dlIfWPgHCXAZLjmt1y7NV84P4pGU8+cro29n0w5Y3SnLxNtFx766xF6VdLLpdHox6wjqt2hO3LO8P5j4/+eJU64toYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKH8GeT/AfhGBiNz+pWOAAAAAElFTkSuQmCC" alt="Partner 4" />
              <p>Google</p>
            </div>
            <div className="partner">
              <img src="data:image/png;base64,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" alt="Partner 5" />
              <p>Microsoft</p>
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <img src="jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="Testimonial 1" />
              <p>"This organization changed my life. I am forever grateful!"</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <img src="christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="Testimonial 2" />
              <p>"Amazing work by amazing people. Highly recommend!"</p>
              <p>- Jane Smith</p>
            </div>
            <div className="testimonial">
              <img src="almos-bechtold-3402kvtHhOo-unsplash.jpg" alt="Testimonial 3" />
              <p>"They truly care about the community and making a difference."</p>
              <p>- Robert Brown</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Get Involved</h2>
          <p>Join us in making a difference. Become a volunteer or donate today!</p>
          <br/>
          <Link to = "/ContactUs"><button>Contact Us</button></Link>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
