package Muxagot3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Muxagot3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: home
 */
@Entity(name = "IISMuxagot3home")
@Table(schema = "public", name = "home")
public class home {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "Широта")
    private Double широта;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "City")
    @Convert("City")
    @Column(name = "City", length = 16, unique = true, nullable = false)
    private UUID _cityid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "City", insertable = false, updatable = false)
    private City city;


    public home() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }


}