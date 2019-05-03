package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class Init implements ApplicationListener<ContextRefreshedEvent> {

    public static Position currentPosition;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }

    private void initData() {
        Init.currentPosition = new Position();
        Init.currentPosition.setLongitude(125.0);
        Init.currentPosition.setLatitude(19.0);
    }
}
