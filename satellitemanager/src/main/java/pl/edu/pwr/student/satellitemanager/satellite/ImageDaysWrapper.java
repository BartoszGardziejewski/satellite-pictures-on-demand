package pl.edu.pwr.student.satellitemanager.satellite;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Getter
@Service
@AllArgsConstructor
@NoArgsConstructor
class ImageDaysWrapper {

    private Date days;
    private byte[] img;
}
