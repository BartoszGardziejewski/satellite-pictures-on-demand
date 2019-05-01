package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Service;

@Getter
@Service
@AllArgsConstructor
class ImageDaysWrapper {

    int days;
    byte[] img;
}
