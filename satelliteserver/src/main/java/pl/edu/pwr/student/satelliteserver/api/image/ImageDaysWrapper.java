package pl.edu.pwr.student.satelliteserver.api.image;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Getter
@Service
@AllArgsConstructor
@NoArgsConstructor
public class ImageDaysWrapper {

    private int days;
    private byte[] img;
}
