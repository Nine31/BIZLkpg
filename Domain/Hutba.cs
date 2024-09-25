namespace Domain;

public class Hutba
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string PictureUrl { get; set; }

    public string Author { get; set; }

    public DateTime PostedDate { get; set; }

    public int Views { get; set; }
}
