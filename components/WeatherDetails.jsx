export default function WeatherDetails({weather}){
    if(!weather){
        return null
    }
    function formatTime(Timestemp){
        if(!Timestemp) {
            return null;
        }
        return new Date(timestamp * 1000).toLocaleTimeString(
            [],
            {
              hour: "numeric",
              minute: "2-digit",
            }
          );
        }
    function getWindDirection(degree){
        if(!degree){
            return null;
        }

    }
    return(
        )
}