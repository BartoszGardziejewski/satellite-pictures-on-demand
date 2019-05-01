package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Getter
@Service
@AllArgsConstructor
@NoArgsConstructor
class ImageDaysWrapper {

    private int days;
    private byte[] img;
}
