export default function Main() {
  return (
    <div className="player-container">
      <video
        className="player"
        autoPlay
        muted
        controls
        width="620"
        height="370"
      >
        <source
          src="https://r4---sn-c0q7lnsl.c.drive.google.com/videoplayback?expire=1620073647&ei=bySQYM3EN-CiwtQPwbOt8As&ip=94.153.11.252&cp=QVRHUkFfUlZSSFhPOjBwRno4d0lMSUlzZE82YU96WWxJaTRJb004ZWR4V0RWbkozby02Z2RtUVQ&id=d2fa18bf654c9d57&itag=18&source=webdrive&requiressl=yes&mh=Wk&mm=32&mn=sn-c0q7lnsl&ms=su&mv=m&mvi=4&pl=20&ttl=transient&susc=dr&driveid=1wKeKmEmQvq0xa-sQ6kC-cqRxXtk_n7Nl&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=1703.090&lmt=1619937908994670&mt=1620059064&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgSSF3-bvQeHnGhLolPZu2WXT--u3JFMm7lJkwA96OtXYCIHcvofZF-AIDWxlZsQVSqq78cqTeVwf7cPEprB6JmTSF&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJt1CI85XtnBybS_Los9kDu6dPjZf6atJ0zEBH6P1FwEAiEAyt0-UCn7LY7PyVT_U3ung_MocteCRV2WXXi9ey3thcA=&cpn=_4cE6d54j9HjhAWu&c=WEB_EMBEDDED_PLAYER&cver=1.20210428.1.1"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
